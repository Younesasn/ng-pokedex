import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = false;
  redirectUrl: string = '';

  constructor() {}

  login(name: string, password: string): Observable<boolean> {
    const isLoggedIn = name == 'user' && password == 'user';

    return of(isLoggedIn).pipe(
      delay(900),
      tap((isLoggedIn) => (this.isLoggedIn = isLoggedIn))
    );
  }

  logout() {
    this.isLoggedIn = false;
  }
}
