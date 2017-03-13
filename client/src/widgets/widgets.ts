import {Component} from '@angular/core';
import {WidgetsService} from './widgets.service';

@Component({
  selector: 'widgets',
  template: `
    <h1>Practice creating components</h1>
    <pre>{{Widgets | json}}</pre>
  `,
  providers: [WidgetsService],
})
export class Widgets {
  widgets = [];
  constructor(_widgetsService: WidgetsService) {
    this.widgets = _widgetsService.widgets;
  }
}