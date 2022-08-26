import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";

export interface AuthResponseData {
  kind: string,
  idToken: string,
  email: string,
  refrehToken: string,
  expiresIn: string,
  localId: string,
  registered?: boolean;
}

/* DO NOT EXPOSE YOUR Web API Key HERE!!! BECAUSE THIS IS A PUBLIC REPOSITORY ON GITHUB!!! */
@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private httpClient: HttpClient) {}

  signup(email: string, password: string) {
    return this.httpClient.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(catchError(this.handleError));
  }

  login (email: string, password: string) {
    return this.httpClient.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(catchError(this.handleError));
  }

  private handleError (errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already!';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exists.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.'
    }
    return throwError(errorMessage);
  }

}
