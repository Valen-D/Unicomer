import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm: FormGroup;

  constructor(private loginService: LoginService, private router: Router) {
    this.registerForm = new FormGroup({
      'username' : new FormControl('', Validators.required),
      'password' : new FormControl('', [Validators.required, Validators.minLength(8)]),
      'confirmPassword' : new FormControl('', [Validators.required, Validators.minLength(8), this.validatorConfirmPass()])
    });
  }

  validatorConfirmPass(): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {
      if (this.registerForm == null) {
        return null
      }
      const password = this.registerForm.get('password')?.value
      const confirmPassword = this.registerForm.get('confirmPassword')?.value
      if (password != confirmPassword) {
        return { 'confirmPasswordInvalid': true }
      }
      else {
        return null
      }
    }
  }

  validatorMessage(field: string) {
    return this.registerForm.get(field)?.value.length === 0 && this.registerForm.get(field)?.touched
  }

  validatorLengthMessage(field: string) {
    return this.registerForm.get(field)?.value.length > 0 && this.registerForm.get(field)?.value.length < 8 && this.registerForm.get(field)?.touched
  }

  validatorConfirmPassMessage() {
    return this.registerForm.get('confirmPassword')?.value.length > 0 && this.registerForm.get('confirmPassword')?.errors && this.registerForm.get('confirmPassword')?.hasError('confirmPasswordInvalid')
  }

  onSubmit() {
    const newUser = {
      "username": this.registerForm.value.username,
      "password": this.registerForm.value.password,
      "balance": 0
    }

    this.loginService.postUser(newUser)
      .subscribe((result) => {
          console.log(result)
          alert("Usuario registrado exitosamente!")
          this.router.navigate(['/login'])
    });
  }
}
