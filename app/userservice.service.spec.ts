import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserserviceService } from './userservice.service';

describe('UserserviceService', () => {
  let component: UserserviceService;
  let fixture: ComponentFixture<UserserviceService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserserviceService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserserviceService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
