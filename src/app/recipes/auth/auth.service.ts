import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface AuthResponseData {
  kind: string,
  idToken: string,
  email: string,
  refrehToken: string,
  expiresIn: string,
  localId: string
}

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private httpClient: HttpClient) {}

  /* DO NOT EXPOSE YOUR Web API Key HERE!!! BECAUSE THIS IS A PUBLIC REPOSITORY ON GITHUB!!! */
  signup(email: string, password: string) {
    return this.httpClient.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    );
  }
}
