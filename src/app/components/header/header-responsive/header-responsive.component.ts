import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-responsive',
  template: `
      <div class="burger uk-offcanvas-content">
      <span class="burger__icon" uk-icon="icon:menu; ratio:1.5" uk-toggle="target: #offcanvas-flip"></span>
        <div id="offcanvas-flip" uk-offcanvas="flip: true; overlay: true">
            <div class="uk-offcanvas-bar">
                <button class="uk-offcanvas-close" type="button" uk-close></button>
                <app-offers-counter></app-offers-counter>
                <app-time-counter></app-time-counter>
            </div>
        </div>
    </div>
  `,
  styleUrls: ['./header-responsive.component.scss']
})
export class HeaderResponsiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
