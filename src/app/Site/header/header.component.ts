import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../User/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  protected isLoggedIn: Function;

  constructor(protected authService: AuthService, protected router: Router) {
  }

  ngOnInit() {
    this.isLoggedIn = this.authService.isUserLoggedIn.bind(this.authService);
  }

  logoff() {
    this.authService.logoff();
    this.router.navigate(['']);
  }

}
