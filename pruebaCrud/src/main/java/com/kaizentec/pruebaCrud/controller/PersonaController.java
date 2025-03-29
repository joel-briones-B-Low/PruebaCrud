package com.kaizentec.pruebaCrud.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kaizentec.pruebaCrud.models.Persona;
import com.kaizentec.pruebaCrud.repositories.PersonaRepository;
import com.kaizentec.pruebaCrud.service.PersonaService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController()
@RequestMapping(path = "api/persona")
public class PersonaController {

    private final PersonaRepository personaRepository;

    @Autowired
    PersonaService personaService;

    public PersonaController(PersonaService personaService, PersonaRepository personaRepository) {
        this.personaService = personaService;
        this.personaRepository = personaRepository;
    }

    @GetMapping("/")
    public List<Persona> getPersonas() {
        return personaService.getPersonas();
    }

    @GetMapping("/{personaid}")
    public Optional<Persona> getPersonaID(@PathVariable("personaid") Long id) {
        return personaService.getPersonaID(id);
    }

    // modificar persona
    @PutMapping("/{personaid}")
    public ResponseEntity<String> modificarPersona(@PathVariable("personaid") Long id, @RequestBody Persona persona) {
        if (!personaRepository.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("error en la operacion | persona no encontrada");
        }
        persona.setId(id);
        personaService.modificarPersona(persona);
        return ResponseEntity.ok("operacion correcta");
    }

    @PostMapping("/guardar")
    public void guardarPersona(@RequestBody Persona persona) {
        personaService.guardarPersona(persona);
    }

    @DeleteMapping("/eliminar/{personaid}")
    public void eliminarPersona(@PathVariable("personaid") Long id) {
        personaService.eliminarPersona(id);
    }
}
