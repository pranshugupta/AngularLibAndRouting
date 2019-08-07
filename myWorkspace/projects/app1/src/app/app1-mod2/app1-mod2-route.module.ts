import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { App1Mod2Component } from './app1-mod2.component';
import { App1Mod2Comp1Component } from './app1-mod2-comp1/app1-mod2-comp1.component';
import { App1Mod2Comp2Component } from './app1-mod2-comp2/app1-mod2-comp2.component';

const routes: Routes = [
  {
    path: '',
    component: App1Mod2Component,
    children: [
      { path: 'A1M2C1', component: App1Mod2Comp1Component },
      { path: 'A1M2C2', component: App1Mod2Comp2Component },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [App1Mod2RouteModule]
})
export class App1Mod2RouteModule { }
