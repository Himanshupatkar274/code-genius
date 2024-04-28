import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-store/app.selector';
import { SignUp, signIn } from '../Login-state/log-in.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  constructor(private store:Store<AppState>,private router:Router){}
  SignUpForm!: FormGroup;
  pass_Click = true;
  ngOnInit(){
  this.SignUpForm = new FormGroup({
    fullname:new FormControl('',[Validators.required,Validators.minLength(3),]),
    username:new FormControl('',[Validators.required,Validators.minLength(3),]),
    password:new FormControl('',[Validators.required,Validators.minLength(8),]),

  })
  }
  onSubmit(){
    console.log(this.SignUpForm.value);
    const full_name = this.SignUpForm.value.fullname;
    const username = this.SignUpForm.value.username;
    const password = this.SignUpForm.value.password;
    this.store.dispatch(SignUp({full_name, username,password}));
    this.router.navigate(['/pages/dashboard']);
 
  }
passError = '';
  validateError(){
    if(this.SignUpForm.value.password.Validators.minLength){
      this.passError = 'password length must be greater than 8'
    }else if(this.SignUpForm.value.password.Validators.required){
      this.passError =  'password is required'
    }
  }
  eyeClick(){
    this.pass_Click = !this.pass_Click;
  }
}
