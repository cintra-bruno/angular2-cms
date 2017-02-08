import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Content }                from './content';
import { ContentService }         from './content.service';

@Component({
  moduleId: module.id,
  selector: 'my-contents',
  templateUrl: './contents.component.html',
  styleUrls: [ './contents.component.css' ]
})
export class ContentsComponent implements OnInit {
  contents: Content[];
  selectedContent: Content;
  constructor(
    private contentService: ContentService,
    private router: Router) { }
  getContents(): void {
    this.contentService
        .getContents()
        .then(contents => this.contents = contents);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.contentService.create(name)
      .then(content => {
        this.contents.push(content);
        this.selectedContent = null;
      });
  }
  delete(content: Content): void {
    this.contentService
        .delete(content.id)
        .then(() => {
          this.contents = this.contents.filter(h => h !== content);
          if (this.selectedContent === content) { this.selectedContent = null; }
        });
  }
  ngOnInit(): void {
    this.getContents();
  }
  onSelect(content: Content): void {
    this.selectedContent = content;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedContent.id]);
  }
}
