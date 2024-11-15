import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/service/product.service';
import { HttpResponse } from '@angular/common/http';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, RouterLink, CurrencyPipe],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit {
  productList: any = [];
  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(): void {
    this.productService.query().subscribe(((res: HttpResponse<any>) => {
      console.log(res.body)
      this.productList = res.body

    }))
  }



}
