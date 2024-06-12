import { HeaderComponent } from './header/header.component';
import { Component } from '@angular/core';
import { ProductCardListComponent } from './product-card-list/product-card-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { Product } from './model/product';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent],
})
export class AppComponent {}
