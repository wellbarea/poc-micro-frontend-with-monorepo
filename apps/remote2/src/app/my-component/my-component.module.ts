import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyComponentComponent } from './my-component.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: MyComponentComponent
  }
];


@NgModule({
  declarations: [MyComponentComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MyComponentModule {}
