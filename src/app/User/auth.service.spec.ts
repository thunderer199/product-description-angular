/* tslint:disable:no-unused-variable */
import {TestBed, inject, async} from '@angular/core/testing';
import {AuthService} from './auth.service';
import {Http, BaseRequestOptions, Response, ResponseOptions} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {ILoginResponse} from './User';
import {AppConfig} from '../app.config';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppConfig,
        AuthService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend: MockBackend, opts: BaseRequestOptions) => new Http(backend, opts),
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
  });

  let service: AuthService = null;
  let mock: MockBackend = null;

  beforeEach(inject([AuthService, MockBackend, AppConfig], (authService: AuthService, mockBackend: MockBackend, appConfig: AppConfig) => {
    service = authService;
    mock = mockBackend;
    appConfig.load();
  }));

  it('should return server message', async(() => {
    const body = {
      message: `Username or password wrong`,
      success: false
    };

    mock.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(body)
      })));
    });

    service.login({username: 'admin', password: 'admin1'}).subscribe(
      fail,
      (resp) => expect(resp).toBe(body.message)
    );
  }));

  it('should return default message if server message isn\'t defined', async(() => {
    const body = {
      success: false
    };

    mock.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(Object.assign(body, {message: null}))
      })));
    });

    service.login({username: 'admin', password: 'admin'})
      .subscribe(fail, resp => expect('Unknown server error').toBe(resp));
  }));

  it('should be not logged in if login fail', async(() => {
    mock.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify({
          message: 'Username or password invalid',
          success: false
        })
      })));
    });

    service.login({username: 'admin', password: 'admin'}).subscribe(
      fail,
      (resp) => expect(service.isUserLoggedIn()).toBeFalsy()
    );
  }));


  it('should be success login', async(() => {
    const body: ILoginResponse = {
      token: 'some_token',
      success: true
    };

    mock.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(body)
      })));
    });

    service.login({username: 'admin', password: 'admin'})
      .subscribe(_ => expect(service.isUserLoggedIn()).toBeTruthy(), fail);
  }));


  it('should be logged off', async(() => {
    const body: ILoginResponse = {
      token: 'some_token',
      success: true
    };

    mock.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(body)
      })));
    });

    // we should be login for testing logoff functionality
    service.login({username: 'admin', password: 'admin'})
      .subscribe(() => {
        expect(service.isUserLoggedIn()).toBeTruthy();
        service.logoff();
        expect(service.isUserLoggedIn()).toBeFalsy();
      }, fail);

  }));
});
