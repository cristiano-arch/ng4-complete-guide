import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoggingService } from './logging.service';
import * as AuthActions from './auth/store/auth.actions';
import * as fromApp from './store/app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'ng4-complete-guide';

  constructor(
    private store: Store<fromApp.AppState>,
    private loggingService: LoggingService
    ) {}

  ngOnInit() {
    this.store.dispatch(new AuthActions.AutoLogin());
    this.loggingService.printLog('Hello from AppComponent ngOnInit');
  }
  
}
