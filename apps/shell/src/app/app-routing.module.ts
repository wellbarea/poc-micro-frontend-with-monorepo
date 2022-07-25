import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { loadRemoteModule } from "@angular-architects/module-federation";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      type: 'module',
      exposedModule: './AbcModule'
    })
    .then(m => m.AbcModule)
  },
  {
    path: 'remote2',
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      type: 'module',
      exposedModule: './MyModule'
    })
    .then(m => m.MyComponentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
