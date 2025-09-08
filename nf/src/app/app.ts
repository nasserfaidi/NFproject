import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from './sidebar/sidebar';
import { Searchbar } from './searchbar/searchbar';
import { Table } from './table/table';
import { Footer } from './footer/footer';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Sidebar, Searchbar, Table, Footer, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  filterText: string = '';
  title = 'Employee Directory';

  changeLanguage() {
    const html = document.documentElement;
    if (html.getAttribute("dir") === "ltr") {
      html.setAttribute("dir", "rtl");
    }
    else {
      html.setAttribute("dir", "ltr");
    }
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

  Employees = [
    { name: 'Majd Mohanad ', position: 'Frontend Intern', email: 'majdmohanad@gmail.com', mobile: '+962792345678', status: 'Active' },
    { name: 'Mohamad Tamer', position: 'Angular Developer', email: 'ssmohamad@gmail.com', mobile: '+962787654321', status: 'Inactive' },
    { name: 'Layla Hussein', position: 'UI/UX Designer', email: 'layla@gmail.com', mobile: '+962755556666', status: 'Active' },
    { name: 'Salem Omar', position: 'Data Analyst Intern', email: 'salem2233#gmail.com', mobile: '+962791444333', status: 'Inactive' },
    { name: 'Noor Majed', position: 'Backend Developer', email: 'noor2001@gmail.com', mobile: '+962772287123', status: 'Active' },
    { name: 'Ahmad Emad', position: 'Frontend Intern', email: 'ahmad2003@gmail.com', mobile: '+962771882301', status: 'Inactive' },
    { name: 'Aya ismail', position: 'Data Analyst', email: 'aya9911@gmail.com', mobile: '+962791211561', status: 'Inactive' },
    { name: 'Hasan Muntaser', position: 'Quality Assurance', email: 'hasan87hasan@gmail.com', mobile: '+962799927175', status: 'Active' },
    { name: 'Layla Fadel', position: 'Frontend Developer', email: 'layan21@gmail.com', mobile: '+962781843401', status: 'Inactive' }
  ];

  onSearchChanged(value: string) {
    this.filterText = value;
  }
}

