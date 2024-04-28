import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { decrement, increment, reset } from './app-store/app.action';
import { AuthService } from './onboarding/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'code-genius';


  count$: Observable<number>;
  userId= ''
  constructor(private store: Store<{ count: number }>, private auth:AuthService) {
    this.count$ = store.select('count');
  }
 
  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }
  ngOnInit(){
    this.auth.autoAuthenticate();
  }
}
