import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyNavBarComponent } from './sticky-nav-bar.component';

describe('StickyNavBarComponent', () => {
  let component: StickyNavBarComponent;
  let fixture: ComponentFixture<StickyNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickyNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
