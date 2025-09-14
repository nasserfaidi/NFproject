import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Table } from '../table/table';
import { Searchbar } from '../searchbar/searchbar';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, Table, Searchbar],
  templateUrl: './employees.html',
  styleUrl: './employees.css'
})
export class Employees {
  employeesList = [
    { name: 'Majd Mohanad ', position: 'Frontend Intern', email: 'majdmohanad@gmail.com', mobile: '+962792345678', status: 'Active' },
    { name: 'Mohamad Tamer', position: 'Angular Developer', email: 'ssmohamad@gmail.com', mobile: '+962787654321', status: 'Inactive' },
    { name: 'Layla Hussein', position: 'UI/UX Designer', email: 'layla@gmail.com', mobile: '+962755556666', status: 'Active' },
    { name: 'Salem Omar', position: 'Data Analyst Intern', email: 'salem2233@gmail.com', mobile: '+962791444333', status: 'Inactive' },
    { name: 'Noor Majed', position: 'Backend Developer', email: 'noor2001@gmail.com', mobile: '+962772287123', status: 'Active' },
    { name: 'Ahmad Emad', position: 'Frontend Intern', email: 'ahmad2003@gmail.com', mobile: '+962771882301', status: 'Inactive' },
    { name: 'Aya ismail', position: 'Data Analyst', email: 'aya9911@gmail.com', mobile: '+962791211561', status: 'Inactive' },
    { name: 'Hasan Muntaser', position: 'Quality Assurance', email: 'hasan87hasan@gmail.com', mobile: '+962799927175', status: 'Active' },
    { name: 'Layla Fadel', position: 'Frontend Developer', email: 'layan21@gmail.com', mobile: '+962781843401', status: 'Inactive' }
  ];

searchTerm: string = '';
isGrid: boolean = false;

  onSearch(value: string){
  this.searchTerm = value;
  }


  onToggleGrid(value:boolean) {
    this.isGrid = value;
  }

}
