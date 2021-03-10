import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCometModalComponent } from './add-comet-modal.component';

describe('AddCometModalComponent', () => {
  let component: AddCometModalComponent;
  let fixture: ComponentFixture<AddCometModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCometModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCometModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
