import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-table-task',
  templateUrl: './table-task.component.html',
  styleUrls: ['./table-task.component.scss']
})
export class TableTaskComponent {

  tasks: Task[] = [];
  userIdString = '';
  userId: number = 0;

 
  constructor(private taskService: TaskService ) {   }


  ngOnInit() {

    this.userIdString = localStorage.getItem('userId') ?? '';
    this.userId = parseInt(this.userIdString, 10);

    this.taskService.getTasks(this.userId)
    .subscribe((result) => {
      this.tasks = result
  })};
}
