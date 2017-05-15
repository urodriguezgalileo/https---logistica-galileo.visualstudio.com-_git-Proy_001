import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompresorTemperatureChartComponent } from './compresor-temperature-chart.component';

describe('CompresorTemperatureChartComponent', () => {
  let component: CompresorTemperatureChartComponent;
  let fixture: ComponentFixture<CompresorTemperatureChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompresorTemperatureChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompresorTemperatureChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
