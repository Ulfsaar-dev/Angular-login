import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../guard/auth.service';

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
      this.authService.login().subscribe(() => {
        if (this.authService.isLoggedIn) {
          this.authService.isAdmin = true;
          this.router.navigateByUrl('/admin');
        }
      });
    } else if (this.loginForm.value.username === "user" && this.loginForm.value.password === "123") {
      this.authService.login().subscribe(() => {
        if (this.authService.isLoggedIn) {
          this.authService.isAdmin = false;
          this.router.navigateByUrl('/user');
        }
      });
    } else {
      alert("Username or Password is invalid.");
    }

  }

}
