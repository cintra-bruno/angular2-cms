import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DemoComponent } from './demo.component';

const routes: Routes = [
  { path: 'demo',     component: DemoComponent }
];

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule, DemoComponent ]
})
export class DemoModule { }
