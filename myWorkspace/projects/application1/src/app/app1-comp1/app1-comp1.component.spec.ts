import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App1Comp1Component } from './app1-comp1.component';

describe('App1Comp1Component', () => {
  let component: App1Comp1Component;
  let fixture: ComponentFixture<App1Comp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App1Comp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App1Comp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
