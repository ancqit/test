import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoeITWorksComponent } from './hoe-itworks.component';

describe('HoeITWorksComponent', () => {
  let component: HoeITWorksComponent;
  let fixture: ComponentFixture<HoeITWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoeITWorksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoeITWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
