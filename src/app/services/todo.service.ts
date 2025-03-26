import { Injectable } from '@angular/core';

export interface Task {
  idTask: number;
  titleTask: string;
  priority: boolean;
}

export interface TaskResponse {
  idDay: number;
  dayTitle: string;
  tasks: Task[];
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public tasks: TaskResponse[] = [
    {
      idDay: 1,
      dayTitle: 'ПН',
      tasks: [
        { idTask: 1, titleTask: 'Task 1', priority: false },
        { idTask: 2, titleTask: 'Task 2', priority: true },
      ]
    },

    {
      idDay: 2,
      dayTitle: 'СР',
      tasks: [
        { idTask: 1, titleTask: 'Task 3', priority: true },
      ]
    },
    {
      idDay: 3,
      dayTitle: 'ВТ',
      tasks: [
        { idTask: 1, titleTask: 'Task 4', priority: false },
        { idTask: 2, titleTask: 'Nikonets Maria', priority: true },
      ]
    }
    ];

  constructor() { }

  deleteTask(dayId: number, taskId: number) {
    const day = this.tasks.find(task => task.idDay === dayId);
    if (day) {
      day.tasks = day.tasks.filter(task => task.idTask !== taskId);
    }
  }
}

