import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatModule } from '../mat/mat.module';
import { ShareModule } from '../share/share.module';
import { AssessmentComponent } from './assessment/assessment.component';
import { HtmlComponent } from './assessment/html/html.component';
import { CssComponent } from './assessment/css/css.component';
import { AngularComponent } from './assessment/angular/angular.component';
import { NodeComponent } from './assessment/node/node.component';
import { JsComponent } from './assessment/js/js.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CertificateComponent } from './assessment/certificate/certificate.component';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './assessment_state/assessment.effects';
import { StoreModule } from '@ngrx/store';
import { ANGULAR_STATE, CSS_STATE, HTML_STATE, JS_STATE, NODE_STATE } from './assessment_state/assessment.selector';
import { angularReducer, cssReducer, htmlReducer, jsReducer, nodeReducer } from './assessment_state/assessment.reducer';


@NgModule({
  declarations: [
    DashboardComponent,
    AssessmentComponent,
    HtmlComponent,
    CssComponent,
    AngularComponent,
    NodeComponent,
    JsComponent,
    CertificateComponent,
   
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    HttpClientModule,
    MatModule,
    ShareModule,
    ReactiveFormsModule,
    FormsModule,
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature(HTML_STATE,htmlReducer),
    StoreModule.forFeature(CSS_STATE,cssReducer),
    StoreModule.forFeature(JS_STATE,jsReducer),
    StoreModule.forFeature(ANGULAR_STATE,angularReducer),
    StoreModule.forFeature(NODE_STATE,nodeReducer),

  ]
})
export class PageModule { }
