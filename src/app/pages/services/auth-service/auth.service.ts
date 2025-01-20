import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  private redirectUrl: string | null = null;

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router) {}

  login(email: string, password: string) {

    this.loggedIn.next(true);
    const redirect= this.redirectUrl ? this.redirectUrl : '/home';
    this.redirectUrl=null;
    this.router.navigate([redirect]);
  }

  signup(name: string, username: string, mobile: string, email: string, password: string) {

    this.loggedIn.next(true);
    const redirect= this.redirectUrl ? this.redirectUrl : '/home';
    this.redirectUrl=null;
    this.router.navigate([redirect]);
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/home']);
  }
  setRedirectUrl(url: string) {
    this.redirectUrl = url;
  }
}
