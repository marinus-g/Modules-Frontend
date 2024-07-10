import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningObjectUploadComponent } from './learning-object-upload.component';

describe('LearningObjectUploadComponent', () => {
  let component: LearningObjectUploadComponent;
  let fixture: ComponentFixture<LearningObjectUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningObjectUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningObjectUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
