import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  userNameError: string;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    this._createForm();
  }

  ngOnInit(): void {
  }
// Створюємо форму та валідуємо її
  _createForm(): void {
    this.form = new FormGroup({
      username: new FormControl(null, [
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.required,
      ]),
      password: new FormControl(null, [
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.required,
      ]),
      confirmPassword: new FormControl(null, [
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.required,
      ]),
    }, [this._checkPasswords])
  }

  // take data with form. Delete field confirmPassword. Save user on DB and redirect to page login.
  register(): void {
    const data = this.form.value;
    delete data.confirmPassword;
    this.authService.register(data).subscribe({
      next: () => {
        this.router.navigate(['login'])
      },
      error: e => this.userNameError = e.error.username[0]
    });
  };

// Порівнюємо паролі чи вони однакові
  _checkPasswords(form: AbstractControl): ValidationErrors | null {
    const password = form.get('password')
    const confirmPassword = form.get('confirmPassword')
    return password?.value === confirmPassword?.value ? null : {notSame: true}
  }
}
