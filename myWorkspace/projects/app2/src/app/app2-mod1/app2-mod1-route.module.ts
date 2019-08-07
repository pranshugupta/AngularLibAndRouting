import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { App2Mod1Component } from './app2-mod1.component';
import { App2Mod1Comp1Component } from './app2-mod1-comp1/app2-mod1-comp1.component';
import { App2Mod1Comp2Component } from './app2-mod1-comp2/app2-mod1-comp2.component';

const routes: Routes = [
  {
    path: '',
    component: App2Mod1Component,
    children: [
      { path: 'A2M1C1', component: App2Mod1Comp1Component },
      { path: 'A2M1C2', component: App2Mod1Comp2Component },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [App2Mod1RouteModule]
})
export class App2Mod1RouteModule { }
