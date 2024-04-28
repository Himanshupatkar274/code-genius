import { createAction, props } from '@ngrx/store';

export const signIn = createAction('Login', props<{ username: string, password: string }>());
export const signInSuccess = createAction('[Auth] Sign In Success', props<{ user: any }>());
export const signInFailure = createAction('[Auth] Sign In Failure', props<{ error: string }>());

export const SignUp = createAction('SignUp', props<{full_name:string, username: string, password: string }>());
export const signUpSuccess = createAction('[Auth] Sign Up Success', props<{ user: any }>());
export const signUpFailure = createAction('[Auth] Sign Up Failure', props<{ error: string }>());