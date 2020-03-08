import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { IconsModule } from './icons.module';
import { StickyNavBarComponent } from './sticky-nav-bar/sticky-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    StickyNavBarComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    IconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
