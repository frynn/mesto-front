import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {UserInterface} from "../shared/interfaces/user.interface";
import {AuthService} from "../shared/services/auth.service";

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {
  profile: UserInterface | null = null;
  constructor(private readonly fb: FormBuilder, private readonly authService: AuthService) {
  }

  ngOnInit() {
    this.getProfile();
  }

  editProfileForm = this.fb.group({
    firstname: this.fb.nonNullable.control<string>("", {validators: Validators.required}),
    login: this.fb.nonNullable.control<string>("", {validators: Validators.required}),
    about: this.fb.nonNullable.control<string>("", {validators: Validators.required})
  });

  getProfile(){
    this.authService.getProfile().subscribe({
      next: (profile) => (this.profile = profile),
      error: (err) => console.error(err),
    });
  }

  editUser(id: number){
    const payload = this.editProfileForm.getRawValue();
    this.authService.editUser(id, payload).subscribe({
      next: () => this.getProfile(),
    });
  }

  userEditValues(profile: UserInterface){
    this.editProfileForm.patchValue({firstname: profile.firstname, about: profile.about, login: profile.login})
  }
}
