import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConyugeComponent } from './conyuge.component';

describe('ConyugeComponent', () => {
  let component: ConyugeComponent;
  let fixture: ComponentFixture<ConyugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConyugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConyugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
