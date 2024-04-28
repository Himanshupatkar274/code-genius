import { createReducer, on } from "@ngrx/store";
import { AssessmentState } from "./assessment.state";
import * as AssessmentActions from './assessment.action';
export const initialAuthState: AssessmentState = {
}

export const htmlReducer = createReducer(
  initialAuthState,
  on(AssessmentActions.htmlAssessment, (state) => ({ ...state, error: null })),
  on(AssessmentActions.assessmentLoadFailure, (state, { error }) => ({ ...state, user: null, error })),
);
export const cssReducer = createReducer(
    initialAuthState,
    on(AssessmentActions.cssAssessment, (state) => ({ ...state, error: null })),
    on(AssessmentActions.assessmentLoadFailure, (state, { error }) => ({ ...state, user: null, error })),
  );
  export const jsReducer = createReducer(
    initialAuthState,
    on(AssessmentActions.jsAssessment, (state) => ({ ...state, error: null })),
    on(AssessmentActions.assessmentLoadFailure, (state, { error }) => ({ ...state, user: null, error })),
  );

  export const angularReducer = createReducer(
    initialAuthState,
    on(AssessmentActions.angularAssessment, (state) => ({ ...state, error: null })),
    on(AssessmentActions.assessmentLoadFailure, (state, { error }) => ({ ...state, user: null, error })),
  );
  export const nodeReducer = createReducer(
    initialAuthState,
    on(AssessmentActions.nodeAssessment, (state) => ({ ...state, error: null })),
    on(AssessmentActions.assessmentLoadFailure, (state, { error }) => ({ ...state, user: null, error })),
  );