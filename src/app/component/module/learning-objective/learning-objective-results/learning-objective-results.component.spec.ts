import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningObjectiveResultsComponent } from './learning-objective-results.component';

describe('LearningObjectiveResultsComponent', () => {
  let component: LearningObjectiveResultsComponent;
  let fixture: ComponentFixture<LearningObjectiveResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningObjectiveResultsComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(LearningObjectiveResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
