import {Component, Input, OnInit} from '@angular/core';
import {Contract} from "../api/v1";

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {

  @Input() contracts?: Array<Contract>

  constructor() { }

  ngOnInit(): void {
  }

}
