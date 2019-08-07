import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { App1Mod1Component } from './app1-mod1.component';
import { App1Mod1Comp1Component } from './app1-mod1-comp1/app1-mod1-comp1.component';
import { App1Mod1Comp2Component } from './app1-mod1-comp2/app1-mod1-comp2.component';

const routes: Routes = [
  {
    path: '',
    component: App1Mod1Component,
    children: [
      { path: 'A1M1C1', component: App1Mod1Comp1Component },
      { path: 'A1M1C2', component: App1Mod1Comp2Component },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [App1Mod1RouteModule]
})
export class App1Mod1RouteModule { }
