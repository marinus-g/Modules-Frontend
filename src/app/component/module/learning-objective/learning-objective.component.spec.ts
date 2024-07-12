import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningObjectiveComponent } from './learning-objective.component';

describe('LearningObjectiveComponent', () => {
  let component: LearningObjectiveComponent;
  let fixture: ComponentFixture<LearningObjectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningObjectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningObjectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
