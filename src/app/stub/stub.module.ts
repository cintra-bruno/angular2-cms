import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StubComponent } from './stub.component';

const routes: Routes = [
  { path: 'stub',     component: StubComponent }
];

@NgModule({
  declarations: [
    StubComponent
  ],
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule, StubComponent ]
})
export class StubModule { }
