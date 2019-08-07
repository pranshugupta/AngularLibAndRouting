import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App1Mod2Comp1Component } from './app1-mod2-comp1/app1-mod2-comp1.component';
import { App1Mod2Comp2Component } from './app1-mod2-comp2/app1-mod2-comp2.component';
import { App1Mod2Component } from './app1-mod2.component';

@NgModule({
  declarations: [App1Mod2Comp1Component, App1Mod2Comp2Component, App1Mod2Component],
  imports: [
    CommonModule
  ]
})
export class App1Mod2Module { }
