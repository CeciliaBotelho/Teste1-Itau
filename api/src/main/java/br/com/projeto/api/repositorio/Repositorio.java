package br.com.projeto.api.repositorio;

import org.springframework.data.repository.CrudRepository;

import br.com.projeto.api.modelo.Task;

//Task é o tipo de entidade que p repositorio oferece operações
//long é o tipo da chave primaria
public interface Repositorio  extends CrudRepository<Task, Long>{


}
