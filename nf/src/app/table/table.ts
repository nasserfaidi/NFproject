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

ngAfterViewInit() {
    const avatars =
      document.querySelectorAll('.avatar');

    avatars.forEach((avatar: Element) => {
      const name = (avatar as HTMLElement).dataset['name'] || '';
      const parts = name.trim().split(' ');

      let initials = parts[0][0];
      if (parts.length > 1) {
        initials += parts[parts.length - 1][0];
      }
      (avatar as HTMLElement).textContent = initials.toUpperCase();
      const colors = ['#e74c3c', '#3498db', '#f1c40f', '#2ecc71', '#9b59b6', '#e67e22'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      (avatar as HTMLElement).style.backgroundColor = randomColor;
    });
  };

}
