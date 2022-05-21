import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';

import {ITodos} from "../../interfaces";
import {TodosService} from "../todos.service";

@Injectable({
  providedIn: 'root'
})
export class TodosResolver implements Resolve<ITodos[]> {

  constructor(private todosService: TodosService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITodos[]> | Promise<ITodos[]> | ITodos[] {
    return this.todosService.getAll();
  }

}
