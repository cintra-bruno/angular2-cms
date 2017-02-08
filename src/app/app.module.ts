import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

// modules
import { UtilModule } from './util/util.module';
import { ContentModule } from './content/content.module';

// experimental modules
import { DemoModule } from './demo/demo.module';

import { AppComponent }         from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { StubModule } from './stub/stub.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UtilModule,
    AppRoutingModule,
    ContentModule,
    DemoModule,
    StubModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
