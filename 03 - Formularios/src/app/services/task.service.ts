import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { Observable, Subscriber } from 'rxjs';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private _taskList: Task[] = [];
  private subscriber! : Subscriber<Task[]>

  constructor(private loggerService: LoggerService) {
    this._taskList = [
      new Task(0, "Tarea 1", "Descripción Tarea 1", 1),      
      new Task(1, "Tarea 2",  "Descripción Tarea 2", 2)  
    ];
  }

  getTaskList() : Observable<Task[]>{
    return new Observable((subscriber) => {
      this.subscriber = subscriber;
      subscriber.next(this._taskList);
    });
  }

  addTask(newTask: Task): void{
    this._taskList.push(newTask);
    this.subscriber.next(this._taskList);
  }

  removeTask(id: number){
    this.loggerService.logWarning(`Se ha eliminado la tarea con el id = ${id}`);
    const newArray = this._taskList.filter((task)=> {
      return task.Id !== id;
     });
     this._taskList = newArray;
     this.subscriber.next(this._taskList);
  }

}
