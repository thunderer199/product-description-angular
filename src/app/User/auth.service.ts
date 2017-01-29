import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {IUser, ILoginResponse} from './User';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import {AppConfig} from '../app.config';

@Injectable()
export class AuthService {
  protected TOKEN_KEY = 'BEARER_TOKEN';

  constructor(protected http: Http, protected config: AppConfig) {
  }

  get token(): string {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  set token(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  isUserLoggedIn(): boolean {
    const token = this.token;
    if (typeof token === 'string') {
      return token.length > 0;
    }

    return false;
  }

  login(user: IUser): Observable<any> {
    return this.config.getConfig('API_URL')
      .flatMap((url) => this.http.post(url + '/api/login/', user))
      .map(r => r.json())
      .map((r: ILoginResponse) => {
        if (r.success) {
          return r.token;
        } else {
          throw Error(r.message || 'Unknown server error');
        }
      })
      .map(r => this.token = r);
  }

  logoff() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  register({password, username}: IUser): Observable<any> {
    return this.config.getConfig('API_URL')
      .flatMap((url) => this.http.post(url + '/api/register/', {password, username}))
      .map(r => r.json())
      .map((r: ILoginResponse) => {
        if (r.success) {
          return r.token;
        } else {
          throw Error(r.message || 'Unknown server error');
        }
      })
      .map(r => this.token = r);
  }
}
