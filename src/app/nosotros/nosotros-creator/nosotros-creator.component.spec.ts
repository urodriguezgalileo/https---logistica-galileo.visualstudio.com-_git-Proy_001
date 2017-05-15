import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosCreatorComponent } from './nosotros-creator.component';

describe('NosotrosCreatorComponent', () => {
  let component: NosotrosCreatorComponent;
  let fixture: ComponentFixture<NosotrosCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosotrosCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosotrosCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
