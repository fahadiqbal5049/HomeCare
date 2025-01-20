import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(private router: Router) {}
  navigateToPlumbing() {
    this.router.navigate(['/plumbing']);
  }

  navigateToCleaning(){
this.router.navigate(['/cleaning']);
  }

  navigateToElectricians(){
this.router.navigate(['/electricians']);
  }

  navigateToGardening(){
this.router.navigate(['/gardening']);
  }


}
