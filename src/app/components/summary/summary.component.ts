import { Component, OnInit } from '@angular/core';
import { NavigateService } from "../../services/navigate.service";
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(public navigateService: NavigateService,
              public dataService: DataService) {
  }

  ngOnInit(): void {
  }

}
