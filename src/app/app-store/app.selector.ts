import { createSelector } from '@ngrx/store';
import { AuthState } from '../onboarding/Login-state/log-in.state';
import { AssessmentState } from '../page/assessment_state/assessment.state';

// import { OnboardingState } from '../onboarding/Login-state/log-in.effects';
 
export interface CounterState {
  counter: number;
}
 
export interface AppState {
  count: CounterState,
  Auth: AuthState,
  Assessment:AssessmentState
}
 
export const selectFeature = (state: AppState) => state.count;
 
export const selectFeatureCount = createSelector(
  selectFeature,
  (state: CounterState) => state.counter
);

 
