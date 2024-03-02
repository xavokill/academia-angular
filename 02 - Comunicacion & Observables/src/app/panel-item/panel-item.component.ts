import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-panel-item',
  templateUrl: './panel-item.component.html',
  styleUrls: ['./panel-item.component.css']
})
export class PanelItemComponent implements OnInit{
  @Input()
  item: Task | null = null;

  @Output()
  itemChange = new EventEmitter<number>();

  ngOnInit(): void {
    // TODO: hacer algo
  }

  eliminar(event: any): void{
    // console.log(event);
    this.itemChange.emit(this.item?.Id);
  }
}
