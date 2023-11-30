import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesPageComponent } from './companies-page.component';

describe('CompaniesComponent', () => {
  let component: CompaniesPageComponent;
  let fixture: ComponentFixture<CompaniesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompaniesPageComponent]
    });
    fixture = TestBed.createComponent(CompaniesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
