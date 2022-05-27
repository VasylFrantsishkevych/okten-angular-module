import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

import {ICar} from "../../interfaces";
import {CarService} from "../../services";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  form: FormGroup;
  cars: ICar[];
  carForUpdate: ICar | null

  constructor(private carService: CarService) {
    this._createForm()
  }

  ngOnInit(): void {
    this.carService.getAll().subscribe(value => {
      console.log(value)
      this.cars = value
    });
  }

  _createForm(): void {
    this.form = new FormGroup({
      model: new FormControl(null),
      year: new FormControl(null),
      price: new FormControl(null),
    })
  }

  createCar() {
    const car = this.form.getRawValue();
    if (!this.carForUpdate) {
      this.carService.create(car).subscribe(value => {
        this.cars.push(value)
        this.form.reset()
      });
    } else {
      this.carService.updateById(this.carForUpdate.id, car).subscribe(value => {
        const update = this.cars.find(car => car.id === this.carForUpdate?.id);
        Object.assign(update, value);
        this.carForUpdate = null;
      })
    }
  }



  deleteCar(id: number): void {
    this.carService.delete(id).subscribe(() => {
      const index = this.cars.findIndex(car => car.id === id);
      this.cars.splice(index, 1)
    })
  }

  updateCar(car: ICar): void {
    this.carForUpdate = car;
    this.form.setValue({model: car.model, year: car.year, price: car.price})
  }
}
