import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Content } from './content';

@Injectable()
export class ContentService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private contentsUrl = 'api/contents';  // URL to web api
  constructor(private http: Http) { }
  getContents(): Promise<Content[]> {
    return this.http.get(this.contentsUrl)
               .toPromise()
               .then(response => response.json().data as Content[])
               .catch(this.handleError);
  }
  getContent(id: number): Promise<Content> {
    const url = `${this.contentsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Content)
      .catch(this.handleError);
  }
  delete(id: number): Promise<void> {
    const url = `${this.contentsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
  create(name: string): Promise<Content> {
    return this.http
      .post(this.contentsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }
  update(content: Content): Promise<Content> {
    const url = `${this.contentsUrl}/${content.id}`;
    return this.http
      .put(url, JSON.stringify(content), {headers: this.headers})
      .toPromise()
      .then(() => content)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
