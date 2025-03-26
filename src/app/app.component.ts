import { Component } from '@angular/core';
import { TaskFormComponent } from "./components/task-form/task-form.component";
import { TaskListComponent } from "./components/task-list/task-list.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [TaskFormComponent, TaskListComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
