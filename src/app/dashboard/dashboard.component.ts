import { Component, OnInit } from '@angular/core';

import { Content } from './../content/content';
import { ContentService } from './../content/content.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  contents: Content[] = [];

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getContents()
      .then(contents => this.contents = contents.slice(1, 5));
  }
}
