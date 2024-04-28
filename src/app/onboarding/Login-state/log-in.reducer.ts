import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './log-in.action';
import { AuthState } from './log-in.state';



export const initialAuthState: AuthState = {
}

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.signInSuccess, (state, { user }) => ({ ...state, user, error: null })),
  on(AuthActions.signInFailure, (state, { error }) => ({ ...state, user: null, error })),
);

export const authReduceSignUp = createReducer(
  initialAuthState,
  on(AuthActions.signUpSuccess, (state, { user }) => ({ ...state, user, error: null })),
  on(AuthActions.signUpFailure, (state, { error }) => ({ ...state, user: null, error })),
);