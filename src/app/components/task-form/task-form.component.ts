import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import {Task} from '../../services/todo.service'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  selectedDay: string = '';
  taskTitle: string = '';
  priority: boolean = false;

  constructor(private todoService: TodoService) {}

  addTask() {
    const dayId = this.getDayId(this.selectedDay);
    const newTask: Task = {
      idTask: Date.now(), // Используем timestamp как уникальный ID
      titleTask: this.taskTitle,
      priority: this.priority
    };

    const day = this.todoService.tasks.find(task => task.idDay === dayId);
    if (day) {
      day.tasks.push(newTask); // Добавляем новую задачу
    }

    this.resetForm(); // Сбрасываем форму
  }

  private getDayId(day: string): number {
    switch (day) {
      case 'monday': return 1;
      case 'tuesday': return 3;
      case 'wednesday': return 2;
      case 'thursday': return 4;
      case 'friday': return 5;
      case 'saturday': return 6;
      case 'sunday': return 7;
      default: return 0; // Если день не выбран
    }
  }

  private resetForm() {
    this.selectedDay = '';
    this.taskTitle = '';
    this.priority = false; // Сбрасываем приоритет
  }
}
