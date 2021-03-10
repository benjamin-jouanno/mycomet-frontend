import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CometsPageComponent } from './comets-page.component';

describe('CometsPageComponent', () => {
  let component: CometsPageComponent;
  let fixture: ComponentFixture<CometsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CometsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CometsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
