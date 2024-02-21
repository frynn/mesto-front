import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WrapperComponent} from "./wrapper/wrapper.component";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {ProfileComponent} from "./profile/profile.component";
import {ProfileSettingsComponent} from "./profile-settings/profile-settings.component";
import {ProfileSecurityComponent} from "./profile-security/profile-security.component";
import {SettingsComponent} from "./settings/settings.component";
import {authGuard} from "./shared/guards/auth-guard.guard";
import {PostSelectorComponent} from "./post-selector/post-selector.component";
import {PostSpotComponent} from "./post-spot/post-spot.component";
import {FeedComponent} from "./feed/feed.component";

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [authGuard]
      },
      {
        path: 'settings',
        component: SettingsComponent,
        canActivate: [authGuard],
        children: [
          {
            path: 'profile-settings',
            component: ProfileSettingsComponent,
          },
          {
            path: 'security',
            component: ProfileSecurityComponent,
          }
        ]
      },
      {
        path: 'post-selector',
        component: PostSelectorComponent,
        canActivate: [authGuard],
      },
      {
        path: 'create/post-spot',
        component: PostSpotComponent,
        canActivate: [authGuard],
      },
      {
        path: 'feed',
        component: FeedComponent,
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
