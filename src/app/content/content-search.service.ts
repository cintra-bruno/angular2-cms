import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Content }           from './content';

@Injectable()
export class ContentSearchService {
  constructor(private http: Http) {}
  search(term: string): Observable<Content[]> {
    return this.http
               .get(`app/contents/?name=${term}`)
               .map(response => response.json().data as Content[]);
  }
}
