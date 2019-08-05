import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App2Mod1Comp2Component } from './app2-mod1-comp2.component';

describe('App2Mod1Comp2Component', () => {
  let component: App2Mod1Comp2Component;
  let fixture: ComponentFixture<App2Mod1Comp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App2Mod1Comp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App2Mod1Comp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
