import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from './Task';
import { TaskService } from '../servico/task.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})

export class PrincipalComponent {
  
    task = new Task();

    btnCadastro: boolean = true;

    tabela:boolean = true;

    tasks:Task[] = [];

    constructor(private servico:TaskService){}


    selecionar(): void{
      this.servico.selecionar()
      .subscribe(retorno => this.tasks=retorno);
    }

    //metodo cadastro
    cadastrar():void{
      this.servico.cadastrar(this.task)
      .subscribe(retorno =>{
        
        this.tasks.push(retorno);
      
        //limpa
        this.task =new Task();
        alert('Tarefa cadastrada com sucesso!');

      });
    }

  //selecionar task especifico
    selecionarTask(posicao:number): void{

      this.task = this.tasks[posicao];

      this.btnCadastro = false;

      this.tabela = false;
    }


    editar():void{

      this.servico.editar(this.task)
      .subscribe(retorno=>{

        let posicao= this.tasks.findIndex(obj => {
          return obj.codigo == retorno.codigo;
        });

        this.tasks[posicao] = retorno;

        this.task = new Task();

        this.btnCadastro = true

        this.tabela = true;

        alert('Alteração feita com sucesso')
      });


    }


    remover():void{

      this.servico.remover(this.task.codigo)
      .subscribe(retorno=>{

        let posicao= this.tasks.findIndex(obj => {
          return obj.codigo == this.task.codigo;
        });

        //remover do vetor
        this.tasks.splice(posicao,1);

        this.task = new Task();

        this.btnCadastro = true

        this.tabela = true;

        alert('Remoção feita com sucesso')
      });


    }

    //cancelar
    cancelar(): void{
    this.task = new Task();

    this.btnCadastro = true

    this.tabela = true;
  }

   //metodo de inicialização
   ngOnInit(){
    this.selecionar();
   }

}

