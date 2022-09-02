import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent {
  @Input() control: FormControl<any> = new FormControl();
  @Input() inputType: "number" | "text" | "password" | "date" | "email" = "text";
  @Input() title: string = '';
  @Input() isInvalid: boolean = false;
  @Input() placeholder: string = "";
}
