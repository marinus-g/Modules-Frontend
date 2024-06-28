import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ModuleViewComponent} from "./module-view/module-view.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ModuleViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Modules-Frontend';
}
