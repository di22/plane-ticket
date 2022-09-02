import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./core/layout/layout.component";
import {HomeComponent} from "./pages/home/home.component";
import {PassengerComponent} from "./pages/passenger/passenger.component";
import {Path} from "./core/constants/path";
const routes: Routes = [
  { path: Path.Base, component: LayoutComponent, children: [
      { path: '', component: HomeComponent},
      {path: Path.Home, component: HomeComponent},
      {path: Path.Passenger, component: PassengerComponent},
    ]},
  { path: '', redirectTo: `/${Path.Base}`, pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
