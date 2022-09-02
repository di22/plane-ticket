import { Component } from '@angular/core';
import {RouteService} from "../../core/services/route.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(private routeService: RouteService) {}

  navigateToPassenger(): void {
  this.routeService.navigateToPassenger();
  }
}
