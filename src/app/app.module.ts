import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageModule } from './page/page.module';
import { OnboardingModule } from './onboarding/onboarding.module';
import { ShareModule } from './share/share.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './mat/mat.module';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './app-store/app.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './error/error.component';
import { AuthInterceptor } from './onboarding/Login-state/auth.interceptor';
import { ErrroInterceptor } from './error.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageModule,
    OnboardingModule,
    ShareModule,
    BrowserAnimationsModule,
    MatModule,
    StoreModule.forRoot({count: counterReducer}, {}),
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([]),
    HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor, multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ErrroInterceptor, multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
