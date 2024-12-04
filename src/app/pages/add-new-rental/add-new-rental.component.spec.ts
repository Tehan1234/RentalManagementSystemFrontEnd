import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewRentalComponent } from './add-new-rental.component';

describe('AddNewRentalComponent', () => {
  let component: AddNewRentalComponent;
  let fixture: ComponentFixture<AddNewRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewRentalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
