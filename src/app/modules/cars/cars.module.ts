import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './components/cars/cars.component';
import {CarsService} from "./services/cars.service";
import {ReactiveFormsModule} from "@angular/forms";
import {MainInterceptor} from "../../main.interceptor";


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
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: MainInterceptor,
    },
    CarsService
  ]
})
export class CarsModule { }
