
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { IBasketContent } from '../../interfaces/basket';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [ButtonModule, InputTextModule,FloatLabelModule, CommonModule, FormsModule ],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavbarComponent {
  searchValue:string = ''
  basketContent: IBasketContent[] = []

  constructor(public cartService: CartService, private router: Router) {}

  goToProfile() {
    this.router.navigate(['profile']); 
  }
  goToMain() {
    this.router.navigate(['main']); 
  }


}

