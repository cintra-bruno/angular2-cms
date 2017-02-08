import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { ContentSearchService } from './content-search.service';

import { Content } from './content';
@Component({
  moduleId: module.id,
  selector: 'content-search',
  templateUrl: './content-search.component.html',
  styleUrls: [ './content-search.component.css' ],
  providers: [ContentSearchService]
})
export class ContentSearchComponent implements OnInit {
  contents: Observable<Content[]>;
  private searchTerms = new Subject<string>();
  constructor(
    private contentSearchService: ContentSearchService,
    private router: Router) {}
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.contents = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.contentSearchService.search(term)
        // or the observable of empty contents if there was no search term
        : Observable.of<Content[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Content[]>([]);
      });
  }
  gotoDetail(content: Content): void {
    let link = ['/detail', content.id];
    this.router.navigate(link);
  }
}
