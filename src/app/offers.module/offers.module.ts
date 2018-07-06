import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeCounterComponent } from './time-counter/time-counter.component';
import { OffersCounterComponent } from './offers-counter/offers-counter.component';

import { OffersService } from './offers.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [OffersService],
  declarations: [TimeCounterComponent, OffersCounterComponent],
  exports: [TimeCounterComponent, OffersCounterComponent]
})
export class OffersModule { }
