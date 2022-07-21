import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstroDetailComponent } from './astro-detail.component';

describe('AstroDetailComponent', () => {
  let component: AstroDetailComponent;
  let fixture: ComponentFixture<AstroDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstroDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
