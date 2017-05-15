import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompresorChartElementComponent } from './compresor-chart-element.component';

describe('CompresorChartElementComponent', () => {
  let component: CompresorChartElementComponent;
  let fixture: ComponentFixture<CompresorChartElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompresorChartElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompresorChartElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
