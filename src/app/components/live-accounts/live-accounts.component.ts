import { Component, OnInit } from '@angular/core';
import * as users from '../../../assets/live-accounts/users.json';
import * as tradeData from '../../../assets/live-accounts/tradeData.json';

@Component({
  selector: 'app-live-accounts',
  templateUrl: './live-accounts.component.html',
  styleUrls: ['./live-accounts.component.scss']
})
export class LiveAccountsComponent implements OnInit {


  users = users.default;
  tradeData = tradeData.default;
  active: number = 0;



  constructor() { 
  }

  ngOnInit() {
  }

  setActive(i) {
    this.active = i;
  }

}
