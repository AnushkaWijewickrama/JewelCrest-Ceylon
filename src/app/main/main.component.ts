import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HeroComponent } from "../hero/hero.component";
import { ShopComponent } from "../shop/shop.component";
import { AboutComponent } from "../about/about.component";
import { OfferComponent } from "../offer/offer.component";
import { FooterComponent } from "../footer/footer.component";
import { WhychooseComponent } from "../whychoose/whychoose.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, ShopComponent, AboutComponent, OfferComponent, FooterComponent, WhychooseComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
