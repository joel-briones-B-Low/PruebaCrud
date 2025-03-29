package com.kaizentec.pruebaCrud.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kaizentec.pruebaCrud.models.Persona;
import com.kaizentec.pruebaCrud.repositories.PersonaRepository;

@Service
public class PersonaService {

    // inyeccion de dependencias
    @Autowired
    PersonaRepository personaRepository;

    // get all de las personas
    public List<Persona> getPersonas(){
        return personaRepository.findAll();
    }
    //get por id
    public Optional<Persona> getPersonaID(Long id){
        return personaRepository.findById(id);
    }
    // guardar persona
    public void guardarPersona(Persona persona){
        personaRepository.save(persona);
    }
    // modificar persona
    public void modificarPersona(Persona persona){
        personaRepository.save(persona);
    }

    // eliminar persona
    public void eliminarPersona(Long id){
        personaRepository.deleteById(id);
    }
}
