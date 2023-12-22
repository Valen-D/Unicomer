import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-post-task',
  templateUrl: './post-task.component.html',
  styleUrls: ['./post-task.component.scss']
})
export class PostTaskComponent {
  taskForm: FormGroup;
  userIdString = '';
  userId: number = 0;

  constructor(private taskService: TaskService, private router: Router) {
    this.taskForm = new FormGroup({
      'select' : new FormControl('', Validators.required),
      'value' : new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.userIdString = localStorage.getItem('userId') ?? '';
    this.userId = parseInt(this.userIdString, 10);
    console.log(this.userId)
  }

  onSubmit() {
    const newTask = {
      "description": this.taskForm.value.select,
      "user": {
        "id": this.userId
      },
      "value": this.taskForm.value.value
    } 

    const description = this.taskForm.value.select

    if(description == 'DEPOSIT') {
      this.taskService.postTaskDeposit(newTask)
      .subscribe((result) => {
        console.log(result)
        alert("Operación registrada!")
      })
    }
    else if(description == 'WITHDRAW') {
      this.taskService.postTaskWithdraw(newTask)
      .subscribe((result) => {
        console.log(result)
        alert("Operación registrada!")
      })
    }
    else if(description == 'TRANSFER') {
      this.taskService.postTaskTransfer(newTask)
      .subscribe((result) => {
        console.log(result)
        alert("Operación registrada!")
      })
    }

    console.log(newTask)
}}
