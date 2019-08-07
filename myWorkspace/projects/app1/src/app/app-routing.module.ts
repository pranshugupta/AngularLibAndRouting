import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./app1-root/app1-root.module').then(module => module.App1RootModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [AppRoutingModule]
})
export class AppRoutingModule { }
