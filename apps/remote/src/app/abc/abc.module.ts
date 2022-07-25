import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbcComponent } from './abc.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AbcComponent
  }
];

@NgModule({
  declarations: [
    AbcComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AbcModule {}
