import {Component, OnInit} from '@angular/core';
import {ModuleService} from "../Service/dataservice/module.service";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {RouterLink, Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-module-view',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    NgOptimizedImage,
    FormsModule
  ],
  templateUrl: './module-view.component.html',
  styleUrl: './module-view.component.css'
})
export class ModuleViewComponent implements OnInit {
  classesData: any;
  tableData: any;
  searchTerm: string = '';

  constructor(private moduleService: ModuleService, private router: Router) {
  }

  ngOnInit() {
    this.moduleService.getData().subscribe(data =>{
      this.classesData = data.classes;
      this.tableData = data.table;
    });
  }

  navigateToDetail(itemId: number) {
    this.router.navigate(['/detail', itemId]);
  }

  search() {
    this.moduleService.searchModules(this.searchTerm).subscribe(data =>{
      this.tableData = data;
    })
  }
}
