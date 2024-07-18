import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-team-create',
  standalone: true,
  imports: [],
  templateUrl: './team-create.component.html',
  styleUrl: './team-create.component.css'
})
export class TeamCreateComponent implements OnInit {
  @Input() projectId!: number | undefined;
  @Input() classId!: number | undefined;

  constructor() {
  }

  ngOnInit(): void {

  }
}
