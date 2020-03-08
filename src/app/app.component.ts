import { Component } from '@angular/core';
import { Client } from './shared/interfaces/client.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  clients: Client[] = [
    {
      company: 'Living Map',
      imageUrl: '/assets/img/companies/living-map.png',
      url: 'https://www.livingmap.com/',
    },
    {
      company: 'Pole Star',
      imageUrl: '/assets/img/companies/pole-star.png',
      url: 'https://www.polestarglobal.com/',
    },
    {
      company: 'AppScatter',
      imageUrl: '/assets/img/companies/appscatter.svg',
      url: 'https://appscatter.com/',
    },
    {
      company: 'Sensat',
      url: 'https://www.sensat.co.uk/',
    },
    {
      company: 'Runpath',
      imageUrl: '/assets/img/companies/runpath.png',
      url: 'https://www.runpath.com/',
    },
    {
      company: 'Send Technology',
      imageUrl: '/assets/img/companies/send-technology.svg',
      url: 'https://send.technology/',
    },
  ];
}
