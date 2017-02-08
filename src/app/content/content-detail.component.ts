import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Content }        from './content';
import { ContentService } from './content.service';

@Component({
  moduleId: module.id,
  selector: 'my-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: [ './content-detail.component.css' ]
})
export class ContentDetailComponent implements OnInit {
  content: Content;
  constructor(
    private contentService: ContentService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.contentService.getContent(+params['id']))
      .subscribe(content => this.content = content);
  }
  save(): void {
    this.contentService.update(this.content)
      .then(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }
}
