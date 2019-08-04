import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App2Comp1Component } from './app2-comp1.component';

describe('App2Comp1Component', () => {
  let component: App2Comp1Component;
  let fixture: ComponentFixture<App2Comp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App2Comp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App2Comp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
