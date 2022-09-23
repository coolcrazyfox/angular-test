import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NavigateService {

  constructor(private route: Router) {
  }

  navigateTo(number: number) {
    this.route.navigate(['navigator'], {queryParams: {tab: number}});
  }
}
