import {Component, OnInit} from '@angular/core';
import {tuiIconSearch} from "@taiga-ui/icons";
import {TUI_BUTTON_OPTIONS} from "@taiga-ui/core";
import {TUI_ARROW} from "@taiga-ui/kit";
import {AuthService} from "../shared/services/auth.service";
import {UserInterface} from "../shared/interfaces/user.interface";

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
  providers: [{
    provide: TUI_BUTTON_OPTIONS,
    useValue: {
      appearance: 'flat',
      size: 's',
    }
  }],
})
export class WrapperComponent implements OnInit {
constructor(private readonly authService: AuthService){
}

ngOnInit() {
  this.getProfile()
}

  profile: UserInterface | null = null;
  protected readonly tuiIconSearch = tuiIconSearch;
  readonly arrow = TUI_ARROW;
  readonly accountDropdown = [
    {
      items: [
        {
          label: 'Мой профиль',
          routerLink: '/profile',
        },
        {
          label: 'Настройки',
          routerLink: '/settings/profile-settings',
        },
        {
          label: 'Сохраненное',
          routerLink: '/login',
        },
      ],
    }];

  logout(){
    this.authService.logout()
  }

  getProfile(){
    this.authService.getProfile().subscribe({
      next: (profile) => (this.profile = profile),
      error: (err) => console.error(err),
    })
  }
}
