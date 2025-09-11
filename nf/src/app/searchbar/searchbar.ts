import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  imports: [CommonModule , FormsModule],
  standalone: true,
  templateUrl: './searchbar.html',
  styleUrl: './searchbar.scss'
})
export class Searchbar {
searchText: string = '';
@Output() searchChanged = new EventEmitter<string>();
@Output() viewChanged = new EventEmitter<boolean>();
  isGrid = false;

toggleView() {
  this.isGrid = !this.isGrid;
  this.viewChanged.emit(this.isGrid);
}

onSearchChange() {
  this.searchChanged.emit(this.searchText);
}
}
