import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AppConfig {
  protected _config: Object = null;

  protected responseObservable: Observable<Response> = null;

  constructor(protected http: Http) {
  }

  public getConfig(key: string): Observable<string> {
    if (this._config !== null) {
      return Observable.of(this._config[key]);
    } else {
      return this.responseObservable
        .map(r => r.json())
        .map(config => config[key]);
    }
  }

  load() {
    const src = this.http.get('env.json');

    this.responseObservable = src;
    return src.subscribe(resp => this._config = resp.json());
  }
}
