import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../shared/services/auth.service";
import {UserInterface} from "../shared/interfaces/user.interface";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

interface account {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  constructor(private readonly fb: FormBuilder, private readonly authService: AuthService, private readonly router: Router) {
  }

  mainForm = this.fb.nonNullable.group({
    login: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    password_confirm: ['', Validators.required],
    firstname: ['', Validators.required],
    secondname: ['', Validators.required],
    patronymic: [''],
    date: ['', Validators.required],
  });

  signUp(){
    const payload = this.mainForm.getRawValue()
    console.log(payload);
    this.authService.signUp(payload).subscribe({
      next: () => this.router.navigateByUrl('/'),
      error: (err) => console.error(err)
    })
  }
}
