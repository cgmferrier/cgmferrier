import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { IconsModule } from './icons.module';
import { ClientComponent } from './project/client.component';
import { SkillsChartComponent } from './skills-chart/skills-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
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
