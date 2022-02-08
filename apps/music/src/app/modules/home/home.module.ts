import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { UIComponentsModule } from 'libs/shared/ui/src';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, UIComponentsModule],
})
export class HomeModule {}
