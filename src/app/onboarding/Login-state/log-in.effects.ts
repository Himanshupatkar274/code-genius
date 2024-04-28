import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError, exhaustMap, tap } from 'rxjs/operators';
import * as AuthActions from './log-in.action';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {;
  constructor(private actions$: Actions, private authService: AuthService, private router:Router) {
  }


   signIn$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.signIn),
    exhaustMap(action =>
      this.authService.signIn(action.username, action.password).pipe(
        tap(data => {
          const apiData = data;
          console.log('API data:', data);
          localStorage.setItem("token",apiData.token)
          localStorage.setItem("expiresIn",apiData.expiresIn)
          localStorage.setItem("userId",apiData.userId);
          this.authService.authStatusListner.next(true);
          const expiresInDuration = Number(data.expiresIn);
          this.authService.setAuthTimer(expiresInDuration);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
          this.authService.saveAuthData(String(data.token),expirationDate,String(data.userId));
          this.router.navigate(['/pages/dashboard']);
         
        }),  map(user => AuthActions.signInSuccess({ user })),
        catchError(error => of(AuthActions.signInFailure({ error: 'Sign in failed' })))
      )
    )
  ));

  signUp$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.SignUp),
    exhaustMap(action =>
      this.authService.createUser(action.full_name, action.username, action.password).pipe(
        tap(data => {
          // Handle data here if needed
          const username = data.result.username;
          const fullname = data.result.full_name;
          console.log('API data:', username,fullname);
          this.authService.authStatusListner.next(true);
          this.router.navigate(['/pages/dashboard']);
        }),
        map(user => AuthActions.signInSuccess({ user })),
        catchError(error => of(AuthActions.signInFailure({ error: 'Sign Up failed' })))
      )
    )
  ));

}