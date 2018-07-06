import { Component, OnInit, Input } from '@angular/core';
import { OffersService } from 'src/app/offers.module/offers.service';

@Component({
  selector: 'app-time-counter',
  template: `
  <div class="counter-wrapper">
    <div class="counter-desc">
        <p class="counter-desc_first">
          time remaining
        </p>
        <p class="counter-desc_second">
          <span class="counter-desc_uppercase">
            offer expires
          </span>
        </p>
    </div>
    <div class="counter">
      <div attr.uk-countdown="date: {{date}}">
        <span class="uk-countdown-minutes"></span>:<span class="uk-countdown-seconds"></span>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['../shared/styles/counter.scss']

})
export class TimeCounterComponent implements OnInit {

  public date: String;

  constructor(public service: OffersService) { 
  }

  ngOnInit() {
     this.date = this.service.getExpirationTime();
  }

}
