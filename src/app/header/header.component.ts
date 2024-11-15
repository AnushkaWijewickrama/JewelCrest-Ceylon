import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router) { }

  openNav(): void {
    document.getElementById("myNav")?.classList.toggle("menu_width");
    document.querySelector(".custom_menu-btn")?.classList.toggle("menu_btn-style");

  }
  closeNav(): void {
    document.getElementById("myNav")?.classList.remove("menu_width");
    document.querySelector(".custom_menu-btn")?.classList.remove("menu_btn-style");
  }

  scrollToSection(section: string): void {
    const element: any = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    else {
      this.router.navigate(['/']).then(() => {
        const element: any = document.getElementById(section);
        element?.scrollIntoView({ behavior: 'smooth' });

      })

    }
    // Close the sidebar after scrolling
    this.closeNav();
  }

}
