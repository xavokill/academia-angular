import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-fomulario',
  templateUrl: './fomulario.component.html',
  styleUrls: ['./fomulario.component.css']
})
export class FomularioComponent {

  constructor(private taskService: TaskService){
  }

  addNewTask():void{
    // TODO: obtener los datos del formulario.
    const dummyTask = new Task(99999, "Dummy Task", "Dummy Task", 99);
    this.taskService.addTask(dummyTask);
  }
}
