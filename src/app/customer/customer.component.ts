import {Component, Input, OnInit} from '@angular/core';
import {CustomerWithContracts} from "../api/v1";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  @Input() customer?: CustomerWithContracts;

  constructor() { }

  ngOnInit(): void {
  }

}
