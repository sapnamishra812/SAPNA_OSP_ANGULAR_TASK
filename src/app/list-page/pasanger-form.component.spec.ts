import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasangerFormComponent } from './pasanger-form.component';

describe('PasangerFormComponent', () => {
  let component: PasangerFormComponent;
  let fixture: ComponentFixture<PasangerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasangerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasangerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
