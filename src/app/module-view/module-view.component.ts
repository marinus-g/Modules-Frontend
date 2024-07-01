import {Component, OnInit} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {DataService} from "../Service/data.service";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-module-view',
  standalone: true,
  imports: [
    MatIcon,
    NgForOf,
    RouterLink
  ],
  templateUrl: './module-view.component.html',
  styleUrl: './module-view.component.css'
})
export class ModuleViewComponent implements OnInit {
  classesData: any;
  tableData: any;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getData().subscribe(data =>{
      this.classesData = data.classes;
      this.tableData = data.table;
    });
  }
}
