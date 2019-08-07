import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App1RootComponent } from './app1-root.component';

describe('App1RootComponent', () => {
  let component: App1RootComponent;
  let fixture: ComponentFixture<App1RootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App1RootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App1RootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
