import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompresorDetailComponent } from './compresor-detail.component';

describe('CompresorDetailComponent', () => {
  let component: CompresorDetailComponent;
  let fixture: ComponentFixture<CompresorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompresorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompresorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
