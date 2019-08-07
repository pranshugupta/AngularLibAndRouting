import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App1Mod1Comp1Component } from './app1-mod1-comp1/app1-mod1-comp1.component';
import { App1Mod1Comp2Component } from './app1-mod1-comp2/app1-mod1-comp2.component';
import { App1Mod1Component } from './app1-mod1.component';
import { App1Mod1RouteModule } from './app1-mod1-route.module';

@NgModule({
  declarations: [App1Mod1Comp1Component, App1Mod1Comp2Component, App1Mod1Component],
  imports: [
    CommonModule,
    App1Mod1RouteModule
  ]
})
export class App1Mod1Module { }
