import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CliComponentComponent } from './cli-component/cli-component.component';
import {JumbotronManualComponentComponent} from './jumbotron-manual-component/manual-component.component';
@NgModule({
  declarations: [
    AppComponent,
    CliComponentComponent,
    JumbotronManualComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
