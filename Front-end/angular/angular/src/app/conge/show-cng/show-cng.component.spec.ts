import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCngComponent } from './show-cng.component';

describe('ShowCngComponent', () => {
  let component: ShowCngComponent;
  let fixture: ComponentFixture<ShowCngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
