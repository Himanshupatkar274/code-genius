import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

console.log("onboarding module loaded");
const routes: Routes = [
  { path:'', children : [ 
    {path:'log-in', component:LogInComponent},
    {path:'sign-up', component:SignUpComponent}
  ]}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingRoutingModule { }
