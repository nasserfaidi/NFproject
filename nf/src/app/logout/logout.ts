import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.html',
  styleUrl: './logout.scss'
})
export class Logout {
@Input() showModal: boolean = false;

closeModal() {
  this.showModal = false;
}
}
