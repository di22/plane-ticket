import { Component } from '@angular/core';
import {RouteService} from "../../services/route.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private routeService: RouteService) {}

  navigateToHome(): void {
    this.routeService.navigateToHome();
  }
}
