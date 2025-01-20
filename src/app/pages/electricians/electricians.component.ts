import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RegisteredService } from '../services/registered-data-service/registered.service';
import * as bootstrap from 'bootstrap';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-electricians',
  standalone: true,
  imports: [RouterModule, CommonModule,FormsModule],
  templateUrl: './electricians.component.html',
  styleUrl: './electricians.component.css'
})
export class ElectriciansComponent {
userName: string = '';
  userEmail: string = '';
  userPhone: string = '';
  selectedPlumber: string = '';
  electricianServices: any[] = [];
  constructor(private router: Router, private registeredServices: RegisteredService) { }
  ngOnInit(): void {
    this.registeredServices.getPosts().subscribe(services => {
      this.electricianServices = services.filter(service => service.SERVICES === 'Electricians');
    });
  }

    openModal(plumberName: string): void {
      this.selectedPlumber = plumberName;
      const modalElement = document.getElementById('bookingModal');
      if (modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
      } else {
        console.error('Modal element not found');
      }
    }
gotohome(){
  this.router.navigate(['/home']);
}
}
