import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './app.action';
import { AppState } from './app.selector';

export const initialState = 0

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);