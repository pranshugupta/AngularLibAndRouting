import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App2Mod1Comp1Component } from './app2-mod1-comp1/app2-mod1-comp1.component';
import { App2Mod1Comp2Component } from './app2-mod1-comp2/app2-mod1-comp2.component';
import { App2Mod1Component } from './app2-mod1.component';

@NgModule({
  declarations: [App2Mod1Comp1Component, App2Mod1Comp2Component, App2Mod1Component],
  imports: [
    CommonModule
  ]
})
export class App2Mod1Module { }
