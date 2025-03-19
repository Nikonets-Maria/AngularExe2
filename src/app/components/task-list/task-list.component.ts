import { Component } from '@angular/core';

interface Task {
  idTask: number;
  titleTask: string;
  priority: boolean;
}

interface TaskResponse {
  idDay: number;
  dayTitle: string;
  tasks: Task[];
}

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
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
}
