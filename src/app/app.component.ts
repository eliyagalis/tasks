import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderSectionComponent } from './components/header-section/header-section.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tasks';
}
