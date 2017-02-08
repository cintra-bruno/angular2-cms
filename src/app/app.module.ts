import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

// modules
import { UtilModule } from './util/util.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ContentModule } from './content/content.module';

// experimental modules
import { DemoModule } from './demo/demo.module';
import { StubModule } from './stub/stub.module';

import { AppComponent }         from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UtilModule,
    AppRoutingModule,
    DashboardModule,
    ContentModule,
    DemoModule,
    StubModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
