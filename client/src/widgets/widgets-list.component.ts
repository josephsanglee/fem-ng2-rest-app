import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Widget} from './widgets.service';

@Component({
  selector: 'widgets-list',
  template: `
    <div *ngFor="#widget of widgets" (click)="selected.emit(widget)"
      class="item-card mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">{{widget.name}}</h2>
      </div>
      <div class="mdl-card__supporting-text">
        {{widget.cost}}
      </div>
    </div>
  `,
})
export class WidgetsList {
  @Input() widgets: Widget[];
  @Output() selected: EventEmitter<any> = new EventEmitter();
}