import { Component, OnInit } from '@angular/core';
import * as list from '../../../../assets/list/list.json';
import * as benefits from '../../../../assets/benefits/benefits.json';
import * as faqs from '../../../../assets/faq/faq.json';

@Component({
  selector: 'app-team-desc',
  templateUrl: './team-desc.component.html',
  styleUrls: ['./team-desc.component.scss']
})
export class TeamDescComponent implements OnInit {

  list = list.default;
  benefits = benefits.default;
  faqs = faqs.default;

  constructor() { }

  ngOnInit() {
  }

}
