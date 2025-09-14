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
@Output() searchTermChange = new EventEmitter<string>();
@Output() toggleGrid = new EventEmitter<boolean>();

isGrid: boolean = false;

onSearchChanged(event : Event) {
const input = event.target as HTMLInputElement;
this.searchTermChange.emit(input.value);
}



onToggleGrid() {
  this.isGrid = !this.isGrid;
  this.toggleGrid.emit(this.isGrid);
}
}
