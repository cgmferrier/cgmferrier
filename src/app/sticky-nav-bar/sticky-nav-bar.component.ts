import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-sticky-nav-bar',
  templateUrl: './sticky-nav-bar.component.html',
  styleUrls: ['./sticky-nav-bar.component.scss'],
  animations: [
    trigger('slideDown', [
      state('false', style({ height: 0 })),
      state('true', style({ height: '*', overflow: 'visible' })),
      transition('false <=> true', animate('300ms ease-in-out')),
    ]),
  ]
})
export class StickyNavBarComponent implements OnInit {
  aboutSection: HTMLElement;
  contactSection: HTMLElement;
  navBar: HTMLElement;
  sectionActive: string;
  showNavBar = false;
  windowWidth = window.innerWidth;
  workSection: HTMLElement;

  @HostListener('window:scroll', ['$event'])
  onPageScroll(): void {
    this.triggerNavBar();
    this.sectionActive = this.activeSection;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.windowWidth = event.target.innerWidth;
    this.triggerNavBar();
  }

  get activeSection(): string {
    const scrollPosition = window.scrollY;
    if (
      scrollPosition >= this.aboutSection.offsetTop &&
      scrollPosition < (this.aboutSection.offsetTop + this.aboutSection.offsetHeight)
    ) {
      return 'about';
    }
    if (
      scrollPosition >= this.contactSection.offsetTop &&
      scrollPosition < (this.contactSection.offsetTop + this.contactSection.offsetHeight)
    ) {
      return 'contact';
    }
    if (
      scrollPosition >= this.workSection.offsetTop &&
      scrollPosition < (this.workSection.offsetTop + this.workSection.offsetHeight)
    ) {
      return 'work';
    }
    return '';
  }

  ngOnInit(): void {
    this.aboutSection = document.getElementById('section__about');
    this.contactSection = document.getElementById('section__contact');
    this.navBar = document.getElementById('header-list');
    this.workSection = document.getElementById('section__work');
  }

  private triggerNavBar(): void {
    const navBarYPosition = this.navBar.offsetTop + this.navBar.offsetHeight;
    const scrollPosition = window.scrollY;
    this.showNavBar = this.windowWidth > 860 ? scrollPosition > navBarYPosition : true;
  }
}
