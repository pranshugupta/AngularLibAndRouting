import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App1Comp2Component } from './app1-comp2.component';

describe('App1Comp2Component', () => {
  let component: App1Comp2Component;
  let fixture: ComponentFixture<App1Comp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App1Comp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App1Comp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
