import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningObjectiveResultComponent } from './learning-objective-result.component';

describe('LearningObjectiveResultComponent', () => {
  let component: LearningObjectiveResultComponent;
  let fixture: ComponentFixture<LearningObjectiveResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningObjectiveResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningObjectiveResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
