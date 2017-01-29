import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponent implements OnInit {
  private errorMessage: string = null;

  constructor(protected authService: AuthService, protected router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    const model = f.form.getRawValue();
    if (f.form.valid) {
      this.authService.login(model)
        .subscribe(
          _ => this.router.navigate(['']),
          err => this.errorMessage = (err)
        );
    }
  }

}
