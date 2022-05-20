import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IUserDetails} from "../../../interfaces";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: IUserDetails;

  constructor(private _activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activateRoute.params.subscribe(value => {
      let {state: {data}} = history;
      this.userDetails = data;
    });
  };

}
