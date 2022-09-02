import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Path} from "../constants/path";

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  constructor(private router: Router) {}

  navigateToPassenger(): void {
    this.navigate(Path.Passenger);
  }

  navigateToHome(): void {
    this.navigate(Path.Home);
  }

  private navigate(path: Path): void {
    this.router.navigate([`${Path.Base}/${path}`]);
  }
}
