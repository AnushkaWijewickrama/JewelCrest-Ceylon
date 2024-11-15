import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OfferService } from '../shared/service/offer.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.scss'
})
export class OfferComponent implements OnInit {
  offerList: any = []

  constructor(private offerService: OfferService) { }

  ngOnInit(): void {
    this.offerService.query().subscribe((res: HttpResponse<any>) => {
      console.log(res.body)
      this.offerList = res.body
    })
  }

}
