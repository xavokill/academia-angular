import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task';
import { NgForm } from '@angular/forms';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-fomulario',
  templateUrl: './fomulario.component.html',
  styleUrls: ['./fomulario.component.css']
})
export class FomularioComponent {

  private _idConunter: number = 0;

  constructor(private taskService: TaskService, private logger: LoggerService){
  }

  addNewTask(form: NgForm):void{    
    this.logger.logInfo(`Esto llego como formulario ${JSON.stringify(form.value)}`);
    const task = new Task(this._idConunter++, form.controls['title'].value, form.controls['description'].value, form.controls['priority'].value );
    this.taskService.addTask(task);
  }
}
