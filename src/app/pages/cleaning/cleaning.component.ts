import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { RegisteredService } from '../services/registered-data-service/registered.service';

@Component({
  selector: 'app-cleaning',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './cleaning.component.html',
  styleUrl: './cleaning.component.css'
})
export class CleaningComponent {

  userName: string = '';
    userEmail: string = '';
    userPhone: string = '';
    selectedPlumber: string = '';
    cleaningServices: any[] = [];
    constructor(private router: Router, private registeredServices: RegisteredService) { }
    ngOnInit(): void {
      this.registeredServices.getPosts().subscribe(services => {
        this.cleaningServices = services.filter(service => service.SERVICES === 'Cleaning');
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
