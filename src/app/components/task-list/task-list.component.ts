import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import {TaskResponse} from '../../services/todo.service'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  public tasks: TaskResponse[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.tasks = this.todoService.tasks; 
  }

  deleteTask(dayId: number, taskId: number) {
    this.todoService.deleteTask(dayId, taskId); 
    this.tasks = this.todoService.tasks; 
  }
}
