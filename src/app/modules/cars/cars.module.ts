import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './components/cars/cars.component';
import {CarsService} from "./services/cars.service";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CarsComponent
  ],
    imports: [
        CommonModule,
        CarsRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
    ],
  providers: [
    CarsService
  ]
})
export class CarsModule { }
