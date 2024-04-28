import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { HtmlComponent } from './assessment/html/html.component';
import { CssComponent } from './assessment/css/css.component';
import { AngularComponent } from './assessment/angular/angular.component';
import { NodeComponent } from './assessment/node/node.component';
import { JsComponent } from './assessment/js/js.component';
import { CertificateComponent } from './assessment/certificate/certificate.component';


console.log("page module loaded");

const routes: Routes = [

  { path:'', children : [ 
    {path:'dashboard', component:DashboardComponent},
    {path:'certificate',component:CertificateComponent},
    {path:'assessment', component:AssessmentComponent , children : [
      { path:'html' , component:HtmlComponent},
      { path:'css' , component:CssComponent},
      { path:'angular' , component:AngularComponent},
      { path:'node' , component:NodeComponent},
      { path:'js' , component:JsComponent},
      
    ]}
  ]}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
