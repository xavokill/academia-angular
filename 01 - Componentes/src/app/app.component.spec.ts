import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FomularioComponent } from './fomulario/fomulario.component';
import { PanelComponent } from './panel/panel.component';
import { PanelItemComponent } from './panel-item/panel-item.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent, FomularioComponent, PanelComponent, PanelItemComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
