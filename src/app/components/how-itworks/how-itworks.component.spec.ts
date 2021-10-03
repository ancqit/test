import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowITWorksComponent } from './how-itworks.component';

describe('HowITWorksComponent', () => {
  let component: HowITWorksComponent;
  let fixture: ComponentFixture<HowITWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowITWorksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowITWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
