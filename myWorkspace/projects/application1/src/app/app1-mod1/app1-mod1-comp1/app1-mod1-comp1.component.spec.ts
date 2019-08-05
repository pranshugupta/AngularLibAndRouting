import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App1Mod1Comp1Component } from './app1-mod1-comp1.component';

describe('App1Mod1Comp1Component', () => {
  let component: App1Mod1Comp1Component;
  let fixture: ComponentFixture<App1Mod1Comp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App1Mod1Comp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App1Mod1Comp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
