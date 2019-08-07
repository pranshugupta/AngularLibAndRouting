import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App2RootComponent } from './app2-root.component';

describe('App2RootComponent', () => {
  let component: App2RootComponent;
  let fixture: ComponentFixture<App2RootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App2RootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App2RootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
