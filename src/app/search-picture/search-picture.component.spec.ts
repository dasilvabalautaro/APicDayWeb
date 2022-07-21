import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPictureComponent } from './search-picture.component';

describe('SearchPictureComponent', () => {
  let component: SearchPictureComponent;
  let fixture: ComponentFixture<SearchPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
