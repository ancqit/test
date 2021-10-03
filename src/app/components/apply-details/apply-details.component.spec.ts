import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyDetailsComponent } from './apply-details.component';

describe('ApplyDetailsComponent', () => {
  let component: ApplyDetailsComponent;
  let fixture: ComponentFixture<ApplyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
