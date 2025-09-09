import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from './sidebar/sidebar';
import { Searchbar } from './searchbar/searchbar';
import { Table } from './table/table';
import { Footer } from './footer/footer';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Sidebar, Searchbar, Table, Footer, CommonModule , RouterOutlet , RouterModule],
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
}

