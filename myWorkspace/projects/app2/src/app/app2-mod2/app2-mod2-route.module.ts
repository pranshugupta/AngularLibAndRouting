import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { App2Mod2Component } from './app2-mod2.component';
import { App2Mod2Comp1Component } from './app2-mod2-comp1/app2-mod2-comp1.component';
import { App2Mod2Comp2Component } from './app2-mod2-comp2/app2-mod2-comp2.component';

const routes: Routes = [
  {
    path: '',
    component: App2Mod2Component,
    children: [
      { path: 'A2M2C1', component: App2Mod2Comp1Component },
      { path: 'A2M2C2', component: App2Mod2Comp2Component },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [App2Mod2RouteModule]
})
export class App2Mod2RouteModule { }
