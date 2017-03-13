import {Component} from '@angular/core';
import {WidgetsService} from './widgets.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'widgets',
  template: `
    <h1>Practice creating components</h1>
    <div class="active-widget">
      {{activeWidget.name}}
      {{activeWidget.description}}
    </div>
    <pre>{{widgets | json}}</pre>
  `,
  providers: [WidgetsService],
})
export class Widgets {
  widgets = [];
  activeWidget = {};
  constructor(_widgetsService: WidgetsService, private route: ActivatedRoute) {
    
    this.widgets = _widgetsService.widgets;
    this.route.params.subscribe((params: Params) => {
      this.activeWidget = this.widgets.find(widget => widget.id === parseInt(params['id']));
    });
  }
}