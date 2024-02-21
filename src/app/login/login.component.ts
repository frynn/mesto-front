import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = this.fb.group({
    email: this.fb.nonNullable.control<string>("", {validators: Validators.required}),
    password: this.fb.nonNullable.control<string>("", {validators: Validators.required})
  });
  constructor(private readonly fb: FormBuilder, private readonly authService: AuthService, private readonly router: Router) {
  }

  signIn(){
    const payload = this.loginForm.getRawValue();
    this.authService.signIn(payload).subscribe({
      next: () => this.router.navigateByUrl('/feed'),
      error: (err) => console.error(err),
    })
  }
}
