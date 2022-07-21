import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglePlayComponent } from './google-play.component';

describe('GooglePlayComponent', () => {
  let component: GooglePlayComponent;
  let fixture: ComponentFixture<GooglePlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GooglePlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GooglePlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
