import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigistrationFormComponent } from './rigistration-form.component';

describe('RigistrationFormComponent', () => {
  let component: RigistrationFormComponent;
  let fixture: ComponentFixture<RigistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RigistrationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RigistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
