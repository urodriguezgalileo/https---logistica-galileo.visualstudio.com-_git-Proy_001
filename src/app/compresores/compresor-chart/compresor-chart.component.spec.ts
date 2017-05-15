import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompresorChartComponent } from './compresor-chart.component';

describe('CompresorChartComponent', () => {
  let component: CompresorChartComponent;
  let fixture: ComponentFixture<CompresorChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompresorChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompresorChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
