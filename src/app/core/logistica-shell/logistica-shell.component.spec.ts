import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticaShellComponent } from './logistica-shell.component';

describe('LogisticaShellComponent', () => {
  let component: LogisticaShellComponent;
  let fixture: ComponentFixture<LogisticaShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticaShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticaShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
