import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPtgComponent } from './show-ptg.component';

describe('ShowPtgComponent', () => {
  let component: ShowPtgComponent;
  let fixture: ComponentFixture<ShowPtgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPtgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPtgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
