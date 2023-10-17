import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyuserComponent } from './myuser.component';

describe('MyuserComponent', () => {
  let component: MyuserComponent;
  let fixture: ComponentFixture<MyuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyuserComponent]
    });
    fixture = TestBed.createComponent(MyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
