import { Component, OnInit, Input } from '@angular/core';
import * as securityUrls from '../../../assets/security-items/security-items.json';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {
  @Input() heading;

  securityItems = securityUrls.default;

  constructor() { }

  ngOnInit() {
  }

}
