import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingRoutingModule } from './onboarding-routing.module';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MatModule } from '../mat/mat.module';
import { ShareModule } from '../share/share.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { StoreModule } from '@ngrx/store';
import { AUTH_STATE_NAME, AUTH_STATE_NAME_SIGN_UP } from './Login-state/log-in.selector';
import { authReduceSignUp, authReducer } from './Login-state/log-in.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './Login-state/log-in.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LogInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    OnboardingRoutingModule,
    MatModule,
    ShareModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature(AUTH_STATE_NAME,authReducer),
    StoreModule.forFeature(AUTH_STATE_NAME_SIGN_UP,authReduceSignUp),
    HttpClientModule

  
  ],
  exports:[LogInComponent,
    SignUpComponent]
})
export class OnboardingModule { }
