import { createAction, props } from "@ngrx/store";

export interface commonAsessment {
    question: string;
    isSelected: boolean;
    firstOption: string;
    secondOption: string;
    thirdOption: string;
    fourthOption: string;
    correctAnswer: string
}
export const htmlAssessment = createAction('html');
export const cssAssessment = createAction('css');
export const jsAssessment = createAction('js');
export const angularAssessment = createAction('angular');
export const nodeAssessment = createAction('node');


export const assessmentLoadSuccess = createAction('Asessment Load Success', props<{ user: any }>());
export const assessmentLoadFailure = createAction('[Asessment Load Failure', props<{ error: string }>());