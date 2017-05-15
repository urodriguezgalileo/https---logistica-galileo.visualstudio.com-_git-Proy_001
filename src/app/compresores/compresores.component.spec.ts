import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompresoresComponent } from './compresores.component';

describe('CompresoresComponent', () => {
  let component: CompresoresComponent;
  let fixture: ComponentFixture<CompresoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompresoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompresoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
