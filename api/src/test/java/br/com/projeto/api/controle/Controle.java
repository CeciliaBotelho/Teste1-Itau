package br.com.projeto.api.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.projeto.api.modelo.Task;
import br.com.projeto.api.repositorio.Repositorio;

@RestController
@CrossOrigin(origins = "*") 
/*pra resolver o problema de cors */
public class Controle {

    @Autowired
    private Repositorio acao;

    @PostMapping("/")
    public Task cadastrar(@RequestBody Task c) {
        if (c != null) {
            return acao.save(c);
        } else {
            throw new IllegalArgumentException("O objeto task não pode ser nulo");
        }
    }
    
    @GetMapping("/")
    public Iterable<Task> selecionar(){
        return acao.findAll();
    }

    @PutMapping("/")
    public Task editar(@RequestBody Task c){
        if (c != null) {
            return acao.save(c);
        } else {
            throw new IllegalArgumentException("O objeto task não pode ser nulo");
        }
    }
    
     /* Passando o codigo do task que deseja deletar */
    @DeleteMapping("/{codigo}")
    public void remover(@PathVariable long codigo){
        acao.deleteById(codigo);

    }

}