import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FilterComponent } from "../filter/filter.component";
import { ContentComponent } from "../content/content.component";
import { MainAdComponent } from "../main-ad/main-ad.component";

@Component({
  selector: 'app-main',
  imports: [NavbarComponent, FilterComponent, ContentComponent, MainAdComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  
}
