import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { ContentModule } from './../content/content.module';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forChild(routes),
    ContentModule
  ],
  declarations: [
    DashboardComponent
  ],
  exports: [
    RouterModule,
    DashboardComponent
  ]
})
export class DashboardModule { }
