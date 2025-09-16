import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { EmpService } from '../empservice';
import { CommonModule } from '@angular/common';
import { Table } from '../table/table';
import { Searchbar } from '../searchbar/searchbar';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, Table, Searchbar],
  templateUrl: './employees.html',
  styleUrl: './employees.scss'
})
export class Employees implements OnInit {

  searchTerm: string = '';
  isGrid: boolean = false;
  employeesList: any[] = [];

  constructor(private empService: EmpService) {
  }
  ngOnInit() : void {
    this.employeesList = this.empService.getEmployees();
  }
    
  onSearch(value: string) {
    this.searchTerm = value;
  }


  onToggleGrid(value: boolean) {
    this.isGrid = value;
  }

  ngAfterViewInit() {
    const avatars:HTMLElement[] =Array.from(document.querySelectorAll('.avatar'));
const colors = ['#e74c3c', '#3498db', '#f1c40f', '#2ecc71', '#9b59b6', '#e67e22'];

    avatars.map((avatar: Element) => {
      const name = (avatar as HTMLElement).dataset['name'] || '';
      const parts = name.trim().split(' ');

      let initials = parts[0][0] || '';
      if (parts.length > 1) {
        initials += parts[parts.length - 1][0];
      }
      (avatar as HTMLElement).textContent = initials.toUpperCase();
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      (avatar as HTMLElement).style.backgroundColor = randomColor;
      return avatar;
    });
  };
}
