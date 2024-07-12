import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleListEntryComponent } from './module-list-entry.component';

describe('ModuleListEntryComponent', () => {
  let component: ModuleListEntryComponent;
  let fixture: ComponentFixture<ModuleListEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleListEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleListEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
