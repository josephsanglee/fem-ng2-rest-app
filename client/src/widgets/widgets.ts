import {Component} from '@angular/core';
import {WidgetsService} from './widgets.service';
import {ActivatedRoute, Params} from '@angular/router';
import {WidgetsList} from './widgets-list.component';
import {WidgetDetail} from './widgets-details.component';
@Component({
  selector: 'widgets',
  template: `
    <div class="mdl-grid items">
      <div class="mdl-cell mdl-cell--6-col">
        <widgets-list [widgets]="widgets"
        (selected)="selectWidget($event)"></widgets-list>
      </div>
      <div class="mdl-cell mdl-cell--6-col">
        <widget-detail [selectedWidget]="selectedWidget"></widget-detail>
      </div>
    </div>
  `,
  directives: [WidgetsList, WidgetDetail],
  providers: [WidgetsService],
})
export class Widgets {
  widgets = [];
  selectedWidget = {};

  constructor(_widgetsService: WidgetsService, private route: ActivatedRoute) {
    this.widgets = _widgetsService.widgets;
    // this.route.params.subscribe((params: Params) => {
    //   this.activeWidget = this.widgets.find(widget => widget.id === parseInt(params['id']));
    // });
  }

  selectWidget(widget) {
    this.selectedWidget = widget;
  }
}