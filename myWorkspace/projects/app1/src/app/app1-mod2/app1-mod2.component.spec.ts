import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App1Mod2Component } from './app1-mod2.component';

describe('App1Mod2Component', () => {
  let component: App1Mod2Component;
  let fixture: ComponentFixture<App1Mod2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App1Mod2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App1Mod2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
