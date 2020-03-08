import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faLaptopCode,
  faRocket,
  faUserCheck,
} from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class IconsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faBars,
      faInstagram,
      faLaptopCode,
      faLinkedin,
      faRocket,
      faUserCheck,
    );
  }
}
