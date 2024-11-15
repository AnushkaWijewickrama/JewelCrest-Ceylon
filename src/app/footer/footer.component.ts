import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(private router: Router) { }

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
  }
}
