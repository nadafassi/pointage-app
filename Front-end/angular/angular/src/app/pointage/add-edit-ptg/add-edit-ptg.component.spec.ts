import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPtgComponent } from './add-edit-ptg.component';

describe('AddEditPtgComponent', () => {
  let component: AddEditPtgComponent;
  let fixture: ComponentFixture<AddEditPtgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPtgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPtgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
