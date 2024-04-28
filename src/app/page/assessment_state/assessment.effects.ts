import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of, Observable } from 'rxjs';
import { mergeMap, catchError, tap, exhaustMap, map, withLatestFrom, filter } from 'rxjs/operators';
import * as AssessmentActions from './assessment.action';
import { Router } from '@angular/router';
import { QuestionService } from '../assessment/question.service';
import { Store, select } from '@ngrx/store';
import { Action } from '@ngrx/store'; // Import Action type from @ngrx/store
import { AppState } from 'src/app/app-store/app.selector';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private questionService: QuestionService,
    private router: Router,
    private store: Store<AppState> // Modify with your app state
  ) {}

  private fetchAssessmentData(
    actionType: string,
    getQuestionFn: () => Observable<any>, // Modify the return type to match your API response
    navigateTo: string,
    invokeQuestion: any,
    selector:any
  ): Observable<Action> { // Specify the return type as Observable<Action>
    return createEffect(() => this.actions$.pipe(
      ofType(actionType),
      exhaustMap(action =>
        getQuestionFn().pipe(
          tap(data => {
            const apiData = data;
            this.router.navigate([navigateTo])
            invokeQuestion.next(data); 
            console.log(apiData,"data comes")
          }),  map(user => AssessmentActions.assessmentLoadSuccess({ user })),
          catchError(error => of(AssessmentActions.assessmentLoadFailure({ error: 'Questions Have not loaded' })))
        )
      )
    ));
  }

  html$ = this.fetchAssessmentData(
    AssessmentActions.htmlAssessment.type,
    () => this.questionService.getHtmlQuestion(),
    '/pages/assessment/html',
    this.questionService.invokeHTMLQuestion,
    AssessmentActions.htmlAssessment
  );
  css$ = this.fetchAssessmentData(
    AssessmentActions.cssAssessment.type,
    () => this.questionService.getCssQuestion(),
    '/pages/assessment/css',
    this.questionService.invokeCSSQuestion,
    AssessmentActions.cssAssessment
  );

  jss$ = this.fetchAssessmentData(
    AssessmentActions.jsAssessment.type,
    () => this.questionService.getJsQuestion(),
    '/pages/assessment/js',
    this.questionService.invokeJSQuestion,
    AssessmentActions.jsAssessment
  );

  angular$ = this.fetchAssessmentData(
    AssessmentActions.angularAssessment.type,
    () => this.questionService.getAngularQuestion(),
    '/pages/assessment/angular',
    this.questionService.invokeAngularQuestion,
    AssessmentActions.angularAssessment
  );

  node$ = this.fetchAssessmentData(
    AssessmentActions.nodeAssessment.type,
    () => this.questionService.getNodeQuestion(),
    '/pages/assessment/node',
    this.questionService.invokeNodeQuestion,
    AssessmentActions.nodeAssessment
  );
  // Define other fetch methods similarly for css, jss, angular, node, etc.
}
