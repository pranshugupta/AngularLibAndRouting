import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App1Mod2Comp1Component } from './app1-mod2-comp1.component';

describe('App1Mod2Comp1Component', () => {
  let component: App1Mod2Comp1Component;
  let fixture: ComponentFixture<App1Mod2Comp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App1Mod2Comp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App1Mod2Comp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
