import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { Content } from './content';
import { ContentDetailComponent }  from './content-detail.component';
import { ContentsComponent }      from './contents.component';
import { ContentSearchComponent }  from './content-search.component';
import { ContentService }          from './content.service';

const routes: Routes = [
  { path: 'contents',     component: ContentsComponent },
  { path: 'detail/:id', component: ContentDetailComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    ContentDetailComponent,
    ContentsComponent,
    ContentSearchComponent
  ],
  providers: [ ContentService ],
  exports: [
    RouterModule,
    ContentDetailComponent,
    ContentsComponent,
    ContentSearchComponent
  ]
})
export class ContentModule { }
