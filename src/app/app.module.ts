import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {AppRoutingModule} from "./app-routing.module";
import {SharedModule} from "./shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {PagesComponents} from "./pages";

@NgModule({
  declarations: [
    AppComponent,
    ...PagesComponents
  ],
  imports: [
   SharedModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
