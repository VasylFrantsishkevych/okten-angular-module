import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegEx} from "../../../../constants";
import {ICar} from "../../interfaces";
import {CarsService} from "../../services/cars.service";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  form: FormGroup;
  cars: ICar[];
  carForUpdate: ICar | null;

  constructor(
    private carsService: CarsService,
  ) {
    this._createForm()
  }

  ngOnInit(): void {
    this.carsService.getAll().subscribe(value => {
      console.log(value)
      this.cars = value
    });
  }

  _createForm(): void {
    this.form = new FormGroup({
      model: new FormControl(null, [
        Validators.pattern(RegEx.model)
      ]),
      year: new FormControl(null, [
        Validators.min(1990),
        Validators.max(new Date().getFullYear())
      ]),
      price: new FormControl(null, [
        Validators.min(0),
        Validators.max(1000000)
      ]),
    })
  }

  save() {

  }

}
