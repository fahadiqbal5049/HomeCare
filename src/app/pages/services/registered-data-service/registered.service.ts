import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


interface ServiceData {
  picture: File | null;
  name: string;
  cnic: string;
  service: string;
  location: string;
  serviceDetails: string;
  type: string;
}
@Injectable({
  providedIn: 'root'
})
export class RegisteredService {

  private apiUrl = 'http://localhost:3000/posts';
  private servicesData = new BehaviorSubject<ServiceData[]>([]);

  constructor(private http: HttpClient) { }

  get services() {
    return this.servicesData.asObservable();
  }

  addPost(postData: any): Observable<any> {
    return this.http.post(this.apiUrl, postData);
  }
  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
