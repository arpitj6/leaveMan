import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodViewComponent } from './hod-view.component';

describe('HodViewComponent', () => {
  let component: HodViewComponent;
  let fixture: ComponentFixture<HodViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HodViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
