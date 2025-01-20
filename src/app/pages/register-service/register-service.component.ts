import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { RouterModule } from '@angular/router';
import { RegisteredService } from '../services/registered-data-service/registered.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-service',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule, GoogleMapsModule],
  templateUrl: './register-service.component.html',
  styleUrl: './register-service.component.css'
})
export class RegisterServiceComponent implements OnInit{
  registerForm!: FormGroup;
  services: string[] = ['Plumbing', 'Cleaning', 'Electricians', 'Gardening'];

  constructor(private http: HttpClient,private fb: FormBuilder, private registeredServices: RegisteredService) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      picture: [null, Validators.required],
      name: ['', Validators.required],
      cnic: ['', [Validators.required]],
      service: ['', Validators.required],
      location: ['', Validators.required],
      serviceDetails: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      const postData = {
        Name: formData.name,
        CNIC: formData.cnic,
        SERVICES: formData.service,
        LOCATION: formData.location,
        SERVICE_DETAILS: formData.serviceDetails,
        TYPE: formData.type,
        IMAGE: formData.picture ? formData.picture.name : ''
      };

      this.registeredServices.addPost(postData).subscribe(
        (response) => {
          console.log('Service registered successfully:', response);
          this.registerForm.reset();
        },
        (error) => {
          console.error('Error registering service:', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.registerForm.patchValue({
        picture: file.name
      });
    }
  }

}
