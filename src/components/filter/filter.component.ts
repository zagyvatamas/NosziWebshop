import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { Category } from '../../interfaces/category';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone:true,
  imports: [CommonModule, DividerModule, RadioButtonModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  categories: Category[] = [
    { key: 'books', name: 'Books', description: 'Leírás a könyvek kategóriához.' },
    { key: 'movies', name: 'Movies', description: 'Leírás a filmek kategóriához.' },
    { key: 'music', name: 'Music', description: 'Leírás a zenék kategóriához.' }
  ];

  selectedCategory?: Category;
  selectCategory(category: Category) {
    this.selectedCategory = category;
  }
}
