import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { IconsModule } from './icons.module';
import { SkillsChartComponent } from './skills-chart/skills-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsChartComponent,
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    IconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
