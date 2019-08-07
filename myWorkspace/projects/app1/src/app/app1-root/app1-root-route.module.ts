import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { App1RootComponent } from './app1-root/app1-root.component';

const routes: Routes = [
  {
    path: 'root',
    component: App1RootComponent,
    children: [
      {
        path: 'A1M1',
        loadChildren: () => import('../app1-mod1/app1-mod1.module').then(module => module.App1Mod1Module)
      },
      {
        path: 'A1M2',
        loadChildren: () => import('../app1-mod2/app1-mod2.module').then(module => module.App1Mod2Module)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'root', pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [App1RootRouteModule]
})
export class App1RootRouteModule { }
