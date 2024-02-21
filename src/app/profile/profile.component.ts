import {Component, OnInit} from '@angular/core';
import {AuthService} from "../shared/services/auth.service";
import {UserInterface} from "../shared/interfaces/user.interface";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: UserInterface | null = null;
  constructor(private readonly authService: AuthService) {
  }

  ngOnInit() {
    this.getProfile();
  }

  getProfile(){
    this.authService.getProfile().subscribe({
      next: (profile) => (this.profile = profile),
      error: (err) => console.error(err),
    })
  }
}
