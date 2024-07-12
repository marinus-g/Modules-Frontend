import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningObjectiveUploadComponent } from './learning-objective-upload.component';

describe('LearningObjectUploadComponent', () => {
  let component: LearningObjectiveUploadComponent;
  let fixture: ComponentFixture<LearningObjectiveUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningObjectiveUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningObjectiveUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
