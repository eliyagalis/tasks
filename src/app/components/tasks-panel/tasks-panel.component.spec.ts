import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksPanelComponent } from './tasks-panel.component';
import { Task } from '../../Task';


describe('TasksPanelComponent', () => {
  let component: TasksPanelComponent;
  let fixture: ComponentFixture<TasksPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
