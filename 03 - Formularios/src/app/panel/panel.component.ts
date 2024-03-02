import { Component, OnInit, OnDestroy } from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit, OnDestroy  {
  _taskList: Task[] = [];
  subscription: Subscription | null = null;

  constructor(private taskService: TaskService){
  }

  ngOnInit(): void {
    this.subscription = this.taskService
                  .getTaskList()
                  .subscribe((taskList)=>{
                    this._taskList = [...taskList];
                  });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.subscription = null;    
  }

  deleteTasksFromArray(id: number){
    this.taskService.removeTask(id);    
  }
   
}
