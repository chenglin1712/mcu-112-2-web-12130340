import { ProductService } from './../services/product.service';
import { Component, Input, OnInit, inject, input, numberAttribute } from '@angular/core';
import { Product } from '../model/product';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.css',
})
export class ProductDetailPageComponent implements OnInit {
  @Input({ transform: numberAttribute })
  id!: number;

  product!: Product;

  private router = inject(Router);

  private ProductService = inject(ProductService);

  ngOnInit(): void {
    this.product = this.ProductService.getById(this.id);
  }

  onEdit(): void {
    this.router.navigate(['product', 'form', this.product.id]);
  }

  onRemove(): void {
    this.ProductService.remove(this.product.id);
    this.router.navigate(['products']);
  }

  onBack(): void {
    this.router.navigate(['products']);
  }
}
