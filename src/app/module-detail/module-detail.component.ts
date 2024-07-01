import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../Service/data.service";

@Component({
  selector: 'app-module-detail',
  standalone: true,
  imports: [],
  templateUrl: './module-detail.component.html',
  styleUrl: './module-detail.component.css'
})
export class ModuleDetailComponent {

  item: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  )
  {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.dataService.getItem(id).subscribe(item => {
      this.item = item;
    });
  }
}
