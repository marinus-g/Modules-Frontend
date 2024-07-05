import {Component, OnInit} from '@angular/core';
import {DataService} from "../Service/data.service";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {RouterLink, Router} from "@angular/router";

@Component({
  selector: 'app-module-view',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './module-view.component.html',
  styleUrl: './module-view.component.css'
})
export class ModuleViewComponent implements OnInit {
  classesData: any;
  tableData: any;

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
    this.dataService.getData().subscribe(data =>{
      this.classesData = data.classes;
      this.tableData = data.table;
    });
  }

  navigateToDetail(itemId: number) {
    this.router.navigate(['/detail', itemId]);
  }
}
