import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbookresponseComponent } from './searchbookresponse.component';

describe('SearchbookresponseComponent', () => {
  let component: SearchbookresponseComponent;
  let fixture: ComponentFixture<SearchbookresponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchbookresponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchbookresponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
