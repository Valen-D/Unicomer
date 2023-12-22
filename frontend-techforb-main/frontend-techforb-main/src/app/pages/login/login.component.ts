import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;


  username: string = ''
  password: string = ''
  users: User[] = []
  validationUsername: boolean = false
  validationPassword: boolean = false
  hideMessageErrorPassword: boolean = true
  hideMessageErrorUsername: boolean = true
  message: string = ''



  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      'username': ['', [Validators.required]],
      'password': ['', Validators.required]
    });
  }

  onSubmit() {

    this.username = this.loginForm.value.username
    this.password =this.loginForm.value.password 
    this.loginService.getUsers()
      .subscribe((result) => {
        this.users = result

        this.validationUsername = false
        this.validationPassword = false
        this.hideMessageErrorPassword = true
        this.hideMessageErrorUsername = true

        for (let user of this.users) {
          if (this.username === user.username) {
            this.validationUsername = true

            if (this.password === user.password) {
              this.validationPassword = true
              if (user.id !== undefined) {
                localStorage.setItem('userId', user.id.toString());
              } else {
                console.error('ID undefined.');
              }
              break
            }
          }
        }

        if (this.validationUsername === true && this.validationPassword === true) {
          localStorage.setItem('isLoggedIn', 'true');
          this.router.navigate(['/home'])
         
        }
        else if (this.validationUsername === true && this.validationPassword === false) {
          console.log("clave incorrecta.")
          this.hideMessageErrorPassword = false
        }
        else if (this.validationUsername === false) {
          console.log("usuario no existe")
          this.hideMessageErrorUsername = false
        }
      })
  }
}
