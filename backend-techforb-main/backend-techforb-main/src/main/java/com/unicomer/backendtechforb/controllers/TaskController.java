package com.unicomer.backendtechforb.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.unicomer.backendtechforb.models.Task;
import com.unicomer.backendtechforb.services.TaskService;
import com.unicomer.backendtechforb.services.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/task")
@Validated
public class TaskController {
    
    @Autowired
    private TaskService taskService;

    @Autowired
    private UserService userService;


    @GetMapping("/{id}")
    public ResponseEntity<Task> findById(@PathVariable Long id) {

        Task obj = this.taskService.findById(id);

        return ResponseEntity.ok(obj);
    }


    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Task>> findAllByUserId(@PathVariable Long userId) {
        
        userService.findById(userId);
        
        List<Task> objs = this.taskService.findAllByUserId(userId);
        
        return ResponseEntity.ok().body(objs);
    }

    @PostMapping
    @Validated
    public ResponseEntity<Void> create(@Valid @RequestBody Task obj) {

        this.taskService.create(obj);
        
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
            .path("/{id}").buildAndExpand(obj.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }

    @PutMapping("/{id}")
    @Validated
    public ResponseEntity<Void> update(@Valid @RequestBody Task obj, @PathVariable Long id) {

        obj.setId(id);
        this.taskService.update(obj);

        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {

        this.taskService.delete(id);

        return ResponseEntity.noContent().build();
    }

    @PostMapping("/deposit")
    public ResponseEntity<Void> deposit(@Valid @RequestBody Task depositTask) {
        Task createdTask = this.taskService.deposit(depositTask);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
            .path("/{id}").buildAndExpand(createdTask.getId()).toUri();

        return ResponseEntity.created(location).build();
    }

    @PostMapping("/transfer")
    public ResponseEntity<Void> transfer(
            @Valid @RequestBody Task transferTask) {
        this.taskService.transfer(transferTask);

        return ResponseEntity.noContent().build();
    }

    @PostMapping("/withdraw")
    public ResponseEntity<Void> withdraw(@Valid @RequestBody Task withdrawTask) {
        Task createdTask = this.taskService.withdraw(withdrawTask);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
            .path("/{id}").buildAndExpand(createdTask.getId()).toUri();
            
        return ResponseEntity.created(location).build();
    }

}
