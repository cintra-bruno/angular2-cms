import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { ContentsComponent }      from './content/contents.component';
import { ContentDetailComponent }  from './content/content-detail.component';

import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: ContentDetailComponent },
  { path: 'contents',     component: ContentsComponent },
  { path: 'demo',     component: DemoComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
