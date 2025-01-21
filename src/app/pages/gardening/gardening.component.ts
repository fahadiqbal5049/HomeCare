import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RegisteredService } from '../services/registered-data-service/registered.service';
import * as bootstrap from 'bootstrap';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-gardening',
  standalone: true,
  imports: [RouterModule, CommonModule,FormsModule],
  templateUrl: './gardening.component.html',
  styleUrl: './gardening.component.css'
})
export class GardeningComponent {
userName: string = '';
  userEmail: string = '';
  userPhone: string = '';
  selectedPlumber: string = '';
  gardeningServices: any[] = [];
  selectedService: any;
  constructor(private router: Router, private registeredServices: RegisteredService) { }
  ngOnInit(): void {
    this.registeredServices.getPosts().subscribe(services => {
      this.gardeningServices = services.filter(service => service.SERVICES === 'Gardening');
    });
  }

    openModal(plumberName: string): void {
      this.selectedPlumber = plumberName;
      this.selectedService = this.gardeningServices.find(service => service.Name === plumberName);
      const modalElement = document.getElementById('bookingModal');
      if (modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
      } else {
        console.error('Modal element not found');
      }
    }

}
