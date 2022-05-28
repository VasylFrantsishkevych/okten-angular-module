import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegEx} from "../../../../constants";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    this._createForm();
  }

  ngOnInit(): void {
  }

  _createForm(): void {
    this.form = new FormGroup({
      username: new FormControl(null, [
        Validators.pattern(RegEx.username),
      ]),
      password: new FormControl(null, [
        Validators.pattern(RegEx.password),
      ]),
    })
  }

  // Take data with form. Send data to the server and get pair tokens.
  // Save tokens in localStorage and redirect to cars.
  login(): void {
    const dataLogin = this.form.value;
    this.authService.login(dataLogin).subscribe(value => {
      this.authService.setTokens(value)
      this.router.navigate(['cars']);
    })
  }
}
