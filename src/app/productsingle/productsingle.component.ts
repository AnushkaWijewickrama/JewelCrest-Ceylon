import { Component, OnInit } from '@angular/core';
import { ProductSingleService } from '../shared/service/productsingle.service';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { CurrencyPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-productsingle',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, NgIf, CurrencyPipe],
  templateUrl: './productsingle.component.html',
  styleUrl: './productsingle.component.scss'
})
export class ProductsingleComponent implements OnInit {
  productSingleObject: any = {};
  selectedImage: any;
  constructor(private productSingleService: ProductSingleService, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {

    this.getProductSingle()
    this.imageEvent()
  }
  getProductSingle(): void {
    this.activatedRoute.params.subscribe((res: any) => {
      this.productSingleService.getSingleData(res?.id).subscribe(((res: HttpResponse<any>) => {
        this.productSingleObject = res.body
        this.selectedImage = res.body?.imagePath[0]
        console.log(res.body)

      }))
    })

  }
  imageEvent(): void {
    const thumbnails: any = document.querySelectorAll('.thumbnail');
    const mainImage: any = document.getElementById('main-gem-image');
    console.log(mainImage)

    thumbnails.forEach((thumbnail: any) => {
      thumbnail.addEventListener('click', () => {
        // Change main image to clicked thumbnail
        mainImage.src = thumbnail.src;

        // Remove 'active' class from all thumbnails
        thumbnails.forEach((thumb: any) => thumb.classList.remove('active'));

        // Add 'active' class to the clicked thumbnail
        thumbnail.classList.add('active');
      });
    });
  }

}
