import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCngComponent } from './add-edit-cng.component';

describe('AddEditCngComponent', () => {
  let component: AddEditCngComponent;
  let fixture: ComponentFixture<AddEditCngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
