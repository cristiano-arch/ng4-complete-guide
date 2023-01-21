import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.actions';

/* DO NOT EXPOSE YOUR Web API Key HERE!!! BECAUSE THIS IS A PUBLIC REPOSITORY ON GITHUB!!! */
@Injectable({ providedIn: 'root' })
export class AuthService {

  private tokenExpirationTimer: any;

  constructor(
    private store: Store<fromApp.AppState>
    ) {}

  setLogoutTimer(expirationDuration: number) {
    console.log(expirationDuration);
    this.tokenExpirationTimer = setTimeout(() => {
      this.store.dispatch(new AuthActions.Logout());
    }, expirationDuration);
  }

  clearLogoutTimer() {
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
      this.tokenExpirationTimer = null;
    }
  }
}
