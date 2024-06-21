import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  name: string = '';
  password: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.auth
      .login(this.name, this.password)
      .subscribe((isLoggedIn: boolean) => {
        this.router.navigate(['']);
      });
  }
}
