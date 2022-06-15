import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCarComponent } from './edit-car.component';

describe('EditStudentComponent', () => {
  let component: EditCarComponent;
  let fixture: ComponentFixture<EditCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});