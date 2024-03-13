import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../principal/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private url:string= 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  selecionar():Observable<Task[]>{
    return this.http.get<Task[]>(this.url)
  }

  //metodo cadastro
  cadastrar(obj:Task):Observable<Task>{
    return this.http.post<Task>(this.url, obj);
  }

  //metodo editar
  editar(obj:Task):Observable<Task>{
    return this.http.put<Task>(this.url, obj);
  }

  //metodo remover
  remover(codigo:number): Observable <void>{
    return this.http.delete<void>(this.url + '/' + codigo);
  }
}
