import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { IData } from "../../interfaces/data.interface";
import { NavigateService } from "../../services/navigate.service";
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {
  public navigatorData: IData[] = [];

  constructor(private activeRoute: ActivatedRoute,
              public navigateService: NavigateService,
              private dataService: DataService) {
  }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(params => {
      const tab = params['tab'];
      this.navigatorData = this.dataService.getOnly(Number(tab));
    });
  }
}
