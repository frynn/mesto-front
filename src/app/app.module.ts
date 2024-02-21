import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
  TuiTextfieldControllerModule,
  TuiButtonModule,
  TuiHostedDropdownModule,
  TuiSvgModule,
  TuiDataListModule,
  TuiHintModule, TuiLinkModule, TuiPrimitiveTextfieldModule
} from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {
  TuiAccordionModule,
  TuiAvatarModule,
  TuiDataListWrapperModule,
  TuiInputDateModule,
  TuiInputModule,
  TuiInputPasswordModule,
  TuiSelectModule, TuiTabsModule, TuiTextareaModule
} from "@taiga-ui/kit";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ProfileComponent } from './profile/profile.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { ProfileSecurityComponent } from './profile-security/profile-security.component';
import { SettingsComponent } from './settings/settings.component';
import {AuthInterceptor} from "./shared/interceptors/auth-interceptor";
import { PostSelectorComponent } from './post-selector/post-selector.component';
import { PostSpotComponent } from './post-spot/post-spot.component';
import { FeedComponent } from './feed/feed.component';
import {TuiLetModule} from "@taiga-ui/cdk";

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,
    ProfileSettingsComponent,
    ProfileSecurityComponent,
    SettingsComponent,
    PostSelectorComponent,
    PostSpotComponent,
    FeedComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        TuiRootModule,
        TuiDialogModule,
        TuiAlertModule,
        TuiInputModule,
        TuiTextfieldControllerModule,
        TuiButtonModule,
        TuiHostedDropdownModule,
        TuiSvgModule,
        TuiDataListModule,
        ReactiveFormsModule,
        TuiHintModule,
        TuiInputPasswordModule,
        TuiSelectModule,
        TuiDataListWrapperModule,
        TuiInputDateModule,
        TuiLinkModule,
        FormsModule,
        TuiTabsModule,
        TuiTextareaModule,
        TuiPrimitiveTextfieldModule,
        TuiAvatarModule,
        TuiAccordionModule,
        TuiLetModule
    ],
  providers: [
    {
      provide: TUI_SANITIZER,
      useClass: NgDompurifySanitizer,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
