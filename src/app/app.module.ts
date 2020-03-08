import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { IconsModule } from './icons.module';
import { SidePanelService } from './shared/services/side-panel.service';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { StickyNavBarComponent } from './sticky-nav-bar/sticky-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidePanelComponent,
    StickyNavBarComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    IconsModule,
  ],
  providers: [
    SidePanelService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
