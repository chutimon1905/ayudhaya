import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellerSummaryComponent } from './traveller-summary.component';

describe('TravellerSummaryComponent', () => {
  let component: TravellerSummaryComponent;
  let fixture: ComponentFixture<TravellerSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravellerSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravellerSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
