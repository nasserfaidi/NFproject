import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  imports: [CommonModule , FormsModule],
  standalone: true,
  templateUrl: './searchbar.html',
  styleUrl: './searchbar.css'
})
export class Searchbar {
searchText: string = '';
@Output() searchChanged = new EventEmitter<string>();

onSearchChange() {
  this.searchChanged.emit(this.searchText);
}
}
