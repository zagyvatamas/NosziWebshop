import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { Category } from '../../interfaces/category';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-filter',
  standalone:true,
  imports: [CommonModule, DividerModule, RadioButtonModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  categories: Category[] = [
    { key: 'cat1', name: 'Háztartási kellékek' },
    { key: 'cat2', name: 'Kategória 2' },
    { key: 'cat3', name: 'Kategória 3' },
  ];

  selectedCategory?: Category;
}
