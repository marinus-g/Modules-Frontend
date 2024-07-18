import {AfterViewInit, Component, Input} from '@angular/core';

@Component({
  selector: 'app-project-view',
  standalone: true,
  imports: [],
  templateUrl: './project-view.component.html',
  styleUrl: './project-view.component.css'
})
export class ProjectViewComponent implements AfterViewInit{
  ngAfterViewInit(): void {
  }

  @Input('projectId') public projectId: number | undefined;


}
