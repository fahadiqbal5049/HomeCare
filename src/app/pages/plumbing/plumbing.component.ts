import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RegisteredService } from '../services/registered-data-service/registered.service';
import * as bootstrap from 'bootstrap';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-plumbing',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './plumbing.component.html',
  styleUrl: './plumbing.component.css'
})
export class PlumbingComponent {
  userName: string = '';
  userEmail: string = '';
  userPhone: string = '';
  selectedPlumber: string = '';
  plumbingServices: any[] = [];
  constructor(private router: Router, private registeredServices: RegisteredService) { }
  ngOnInit(): void {
    this.registeredServices.getPosts().subscribe(services => {
      this.plumbingServices = services.filter(service => service.SERVICES === 'Plumbing');
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
