import { Component, OnInit } from '@angular/core';
import { OffersService } from 'src/app/offers.module/offers.service';

@Component({
  selector: 'app-offers-counter',
  template: ` 
          <div class="counter-wrapper">
              <div class="counter">{{offers}}</div>
              <div class="counter-desc">
                  <p class="counter-desc_first" 
                     [innerHtml]="offers > 1 ? 'Spots remaining': 'Spot remaining'">
                  </p>
                  <p class="counter-desc_second">
                    in <img class="counter-desc_flag" [src]="flag"> <span class="counter-desc_country">{{country}}</span>
                  </p>
              </div>
          </div>`,
  styleUrls: ['../shared/styles/counter.scss']
})
export class OffersCounterComponent implements OnInit {
  flag
  offers;
  country;

  constructor(public service: OffersService) { }

  ngOnInit() {
    this.offers = this.service.getOffers();
    this.country = this.service.getLocale();
    this.flag = this.service.getFlagUrl();
  }

}
