import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

// modules
import { UtilModule } from './util/util.module';
import { ContentModule } from './content/content.module';

import { AppComponent }         from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DemoComponent } from './demo/demo.component';
import { StubModule } from './stub/stub.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UtilModule,
    AppRoutingModule,
    ContentModule,
    StubModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    DemoComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
