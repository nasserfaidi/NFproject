import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Logout } from '../logout/logout';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule , Logout],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
showLogoutModal = false;

openLogoutModal() {
  this.showLogoutModal = true;
}
}