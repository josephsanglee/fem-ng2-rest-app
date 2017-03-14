import {Component, Input} from '@angular/core';
import {Widget} from './widgets.service';


@Component({
  selector: 'widget-detail',
  template: `
  <h1> {{selectedWidget.name}} </h1>
  <h4> {{selectedWidget.cost}} </h4>
  `,
})
export class WidgetDetail {
  @Input() selectedWidget;
}