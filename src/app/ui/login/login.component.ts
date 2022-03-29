import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationFormFields } from 'src/app/core/constants/authentication.fields';
import { IAuthRepository } from 'src/app/domain/login/login.repository';
import { Payload, AuthenticationDto } from '../../domain/login/login.dto';
import { HttpResponse } from '@angular/common/http';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { Router } from '@angular/router';
import { HttpStatusCode } from 'src/app/core/constants/statusCode.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    @Inject('loginRepository') private authservice: IAuthRepository,
    private localStorage: LocalStorageService,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.formGroup = this.formBuilder.group(AuthenticationFormFields);
  }

  login() {
    console.log(this.formGroup.value);
    this.authservice.authentication(this.formGroup.value).subscribe(
      response => {
        console.log('response',response)
        this.checkAuthentication(response);
      }
    )
  }

  private checkAuthentication(response: HttpResponse<AuthenticationDto>): void {
    if (response.status === HttpStatusCode.Ok) {
      this.redirectSession(response);
    }
  }

  private redirectSession(response: HttpResponse<AuthenticationDto>): void {
    this.localStorage.saveItem('userSession', response.body);
    this.router.navigateByUrl('users/dashboard');
  }

}
