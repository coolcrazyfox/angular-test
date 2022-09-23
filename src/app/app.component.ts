import { Component, OnInit } from '@angular/core';
import { DataService } from "./services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'googleTest';

  constructor(private _dataService: DataService) {
  }

  ngOnInit(): void {
    this._dataService.fetch();
  }
}
