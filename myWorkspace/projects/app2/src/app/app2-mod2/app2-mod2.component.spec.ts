import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App2Mod2Component } from './app2-mod2.component';

describe('App2Mod2Component', () => {
  let component: App2Mod2Component;
  let fixture: ComponentFixture<App2Mod2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App2Mod2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App2Mod2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
