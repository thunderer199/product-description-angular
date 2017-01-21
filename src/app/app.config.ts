import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppConfig {
  protected _config: Object = null;

  constructor(protected http: Http) {
  }

  public getConfig(key: string): string {
    return this._config[key];
  }

  load() {
    return this.http.get('env.json')
      .subscribe(resp => {
        this._config = resp.json();
      });
  }
}
