import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App2Mod2Comp1Component } from './app2-mod2-comp1/app2-mod2-comp1.component';
import { App2Mod2Comp2Component } from './app2-mod2-comp2/app2-mod2-comp2.component';

@NgModule({
  declarations: [App2Mod2Comp1Component, App2Mod2Comp2Component],
  imports: [
    CommonModule
  ]
})
export class App2Mod2Module { }
