import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = '';

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(name): Observable<boolean> {
    return of(name).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = name)
    );
  }

  logout(): void {
    this.isLoggedIn = '';
  }
}