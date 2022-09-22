import { Component, OnInit } from '@angular/core';
import {OverviewService} from "../overview.service";
import {CustomerWithContracts, Overview} from "../api/v1";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  overview: Overview = {};

  constructor(private overviewService: OverviewService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    this.overviewService.getOverview()
      .subscribe(overview => this.overview = overview);
  }
}
