import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CometEditComponent } from './comet-edit.component';

describe('CometEditComponent', () => {
  let component: CometEditComponent;
  let fixture: ComponentFixture<CometEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CometEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CometEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
