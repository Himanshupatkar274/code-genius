import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './onboarding/log-in/log-in.component';


const routes: Routes = [
 
  {path:'onboarding', loadChildren:() => import('./onboarding/onboarding.module').then(m => m.OnboardingModule) },
  {path:'pages', loadChildren:() => import('./page/page.module').then(m => m.PageModule) },
  // {path:'**' , component:LogInComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
