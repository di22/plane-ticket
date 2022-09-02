import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {InputComponent} from "./components/input/input.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [InputComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterOutlet,
    ReactiveFormsModule
  ],
  exports: [
    BrowserModule,
    CommonModule,
    RouterOutlet,
    ReactiveFormsModule,
    InputComponent
  ]
})
export class SharedModule { }
