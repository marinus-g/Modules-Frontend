import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-team-list',
  standalone: true,
  imports: [],
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.css'
})
export class TeamListComponent {
  @Input() projectId!: number | undefined;
}
