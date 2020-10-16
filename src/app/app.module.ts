import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SymphonieFrontLibModule} from '@hm/symphonie-front-lib';
import { LinkComponent } from './components/link/link.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkComponent,
    ButtonComponent
  ],
    imports: [
        BrowserModule,
        SymphonieFrontLibModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
