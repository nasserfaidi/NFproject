import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-table',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrls: ['./table.scss']
})
export class Table {
@Input() filterText: string = '';
@Input() Employees: any[] = [];
get filteredEmployees() {
  return this.Employees.filter(c => c.name.toLowerCase().includes(this.filterText.toLowerCase()) ||
  c.email.toLowerCase().includes(this.filterText.toLowerCase()) || c.mobile.includes(this.filterText)
  );
}
}
