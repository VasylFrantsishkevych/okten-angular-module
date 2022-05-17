import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {UserService} from "../../services";
import {IUserDetails} from "../../interfaces";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
//Приклад запиту на сервер
export class UserDetailsComponent implements OnInit {

  userDetails: IUserDetails;

  constructor(private activateRoute: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(({id}) => {
      this.userService.getOne(id).subscribe(value => this.userDetails = value);
    });
  }
}

// Приклад з прокиданням даних
// export class UserDetailsComponent implements OnInit {
//
//   userDetails: IUserDetails;
//
//   constructor(private activateRoute: ActivatedRoute) { }
//
//   ngOnInit(): void {
//     this.activateRoute.params.subscribe( value => {
//       let {state: {data}} = history;
//       this.userDetails = data;
//     });
//   }
// }

// Приклад прокидання з використанням button
// export class UserDetailsComponent implements OnInit {
//
//   userDetails: IUserDetails;
//
//   constructor(private activateRoute: ActivatedRoute,
//               private router: Router) {
//     this.activateRoute.params.subscribe( value => {
//       this.userDetails = this.router.getCurrentNavigation()?.extras?.state?.['data'];
//     });
//   }
//
//   ngOnInit(): void {
//
//   }
// }
