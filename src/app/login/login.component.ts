import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthGuard } from '../_helpers/auth.guard';
import { AuthService } from '../_helpers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    
  constructor( private formBuilder: FormBuilder,
    public authService: AuthService, 
    public router: Router) { 
    
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    if (this.loginForm.value.username === "admin" && this.loginForm.value.password === "123") {
      this.authService.login("admin").subscribe(() => {
        if (this.authService.isLoggedIn === "admin") {
          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default
          let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/admin';
          // Redirect the user
          this.router.navigateByUrl(redirect);
        }
      });
    } else if (this.loginForm.value.username === "user" && this.loginForm.value.password === "123") {
      this.authService.login("user").subscribe(() => {
        if (this.authService.isLoggedIn === "user") {
          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default
          let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/user';
          // Redirect the user
          this.router.navigateByUrl(redirect);
        }
      });
    } else {
      alert("Username or Password is invalid.");
    }

  }

}
