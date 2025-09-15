import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrls: ['./table.scss']
})
export class Table {

@Input() employees: any[] = [];
@Input() filter: string = '';
@Input() isGrid : boolean = false;

get filteredEmployees() {
  return this.employees.filter(emp => emp.name.toLowerCase().includes(this.filter.toLowerCase()));
}



}
