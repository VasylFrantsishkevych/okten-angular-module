import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IUser, IUserDetails} from "../../interfaces";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  @Input()
  user: IUser;

  constructor() { }

  ngOnInit(): void {
  }
}

// Button
// export class UserComponent implements OnInit {
//
//   @Input()
//   user: IUser;
//
//   constructor(private router: Router, private activateRoute: ActivatedRoute) { }
//
//   ngOnInit(): void {
//   }
//
//   navigateMe(user: IUser) {
//     this.router.navigate(['user_details', user.id],
//       {relativeTo: this.activateRoute, state: {data: user}});
//   }
// }
