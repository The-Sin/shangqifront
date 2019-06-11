import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CheckRequiredField } from 'src/app/services/form.helper';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  loginform = true;
  recoverform = false;

  showRecoverForm() {
    this.loginform = !this.loginform;
    this.recoverform = !this.recoverform;
  }

  loginForm: FormGroup;

  processing: Boolean = false;
  error: Boolean = false;

  checkField  = CheckRequiredField;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    if (this.authService.hasToken()) {
      this.handleLoginSuccess();
    } else {
      this.initForm();
    }
  }

  // checkRequiredClass(frmControl: string) {
  //   const t  = this.loginForm.get()
  //   return {
  //     'required' : false
  //   };
  // }

  onSubmitButtonClicked() {
    this.error  = false;
    this.processing  = false;
    if (this.loginForm.valid) {
      this.signup();
    }
  }

  private signup() {
    this.processing  = true;
    this.authService.login(this.loginForm.value).then(
      data => {
        if (data) {
          this.handleLoginSuccess();
        } else {
          this.handleLoginError();
        }
      },
      err => {
        console.log('---- ERROR ---- ');
        console.log(err);
        this.handleLoginError();
      });
  }

  private handleLoginSuccess() {
    this.processing = false;
    this.error  = false;
    this.router.navigate(['/dashboard']);
  }

  private handleLoginError() {
    this.processing = false;
    this.error  = true;
  }

  private initForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [ Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
      
    });
  }

}
