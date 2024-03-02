import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FomularioComponent } from './fomulario/fomulario.component';
import { PanelComponent } from './panel/panel.component';
import { PanelItemComponent } from './panel-item/panel-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FomularioComponent,
    PanelComponent,
    PanelItemComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
