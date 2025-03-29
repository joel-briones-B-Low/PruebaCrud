// joel Briones
package com.kaizentec.pruebaCrud.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kaizentec.pruebaCrud.models.Persona;

/*jparepository es una interfaz de Spring data que nos permite 
* realizar operaciones CRUD sobre la entidad que le definamos en el primer 
* parámetro de la interfaz, en este caso Persona.
y el segundo parametro en el tipo de dato identificador del modelo
 */
@Repository
public interface PersonaRepository extends JpaRepository<Persona, Long>{

}
