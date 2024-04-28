import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthState } from '../Login-state/log-in.state';
import { signIn } from '../Login-state/log-in.action';
import { AppState } from 'src/app/app-store/app.selector';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit{
  constructor(private store:Store<AppState>,private router:Router, private authService:AuthService){}
  loginForm!: FormGroup;
  pass_Click = false;
  ngOnInit(){
  this.loginForm = new FormGroup({
    username:new FormControl('',[Validators.required,Validators.minLength(3),]),
    password:new FormControl('',[Validators.required,Validators.minLength(8),]),

  })
  }
  onSubmit(){
    console.log(this.loginForm.value);
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    this.store.dispatch(signIn({username,password}));
 
 
  }
passError = '';
  validateError(){
    if(this.loginForm.value.password.Validators.minLength){
      this.passError = 'password length must be greater than 8'
    }else if(this.loginForm.value.password.Validators.required){
      this.passError =  'password is required'
    }
  }

  eyeClick(){
    this.pass_Click = !this.pass_Click;
  }
}
