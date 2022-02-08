import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromHome from './home/home.reducer';
import { HomeEffects } from './home/home.effects';
import { HomeFacade } from './home/home.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromHome.HOME_FEATURE_KEY, fromHome.reducer),
    EffectsModule.forFeature([HomeEffects]),
  ],
  providers: [HomeFacade],
})
export class SharedStoreModule {}
