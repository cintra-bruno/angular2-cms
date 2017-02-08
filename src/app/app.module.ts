import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

// modules
import { UtilModule } from './util/util.module';

import { AppComponent }         from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentsComponent }      from './content/contents.component';
import { ContentDetailComponent }  from './content/content-detail.component';
import { ContentService }          from './content/content.service';
import { ContentSearchComponent }  from './content/content-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UtilModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ContentDetailComponent,
    ContentsComponent,
    ContentSearchComponent
  ],
  providers: [ ContentService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
