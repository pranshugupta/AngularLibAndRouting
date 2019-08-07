import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App2Mod1Component } from './app2-mod1.component';

describe('App2Mod1Component', () => {
  let component: App2Mod1Component;
  let fixture: ComponentFixture<App2Mod1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App2Mod1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App2Mod1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
