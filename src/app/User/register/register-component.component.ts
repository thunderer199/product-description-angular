import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponent implements OnInit {
  private errorMessage: string = null;

  constructor(protected authService: AuthService, protected router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    const model = f.form.getRawValue();
    if (f.form.valid && model.password === model.confirmPass) {
      this.authService.register(model)
        .subscribe(
          _ => this.router.navigate(['']),
          err => this.errorMessage = (err)
        );
    }
  }

}
