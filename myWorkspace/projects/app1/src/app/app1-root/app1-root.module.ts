import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App1RootComponent } from './app1-root/app1-root.component';
import { App1RootRouteModule } from './app1-root-route.module';

@NgModule({
  declarations: [App1RootComponent],
  imports: [
    CommonModule,
    App1RootRouteModule
  ]
})
export class App1RootModule { }
