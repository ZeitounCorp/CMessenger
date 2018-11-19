import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateConvComponent } from './private-conv.component';

describe('PrivateConvComponent', () => {
  let component: PrivateConvComponent;
  let fixture: ComponentFixture<PrivateConvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateConvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateConvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
