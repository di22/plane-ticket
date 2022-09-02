import {NgModule, Optional, SkipSelf} from '@angular/core';
import {LayoutComponents} from "./layout";
import {SharedModule} from "../shared/shared.module";
import {EnsureModuleLoadedOnceGuard} from "./loaded-once-guard";


@NgModule({
  declarations: [...LayoutComponents],
  imports: [
    SharedModule
  ],
  exports: [...LayoutComponents]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
