import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { TasksPanelComponent } from './components/tasks-panel/tasks-panel.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderSectionComponent, TasksPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tasks';
}
