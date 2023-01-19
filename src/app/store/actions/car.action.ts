import { Action } from '@ngrx/store';
import { CarAdd } from '../models/car.model';
export enum CarActionTypes {
  //add
  ADD_CAR = '[CAR] ADD',
  //delete
  DELETE_CAR = '[CAR] DELETE',
}
export class AddCarAction implements Action {
  readonly type = CarActionTypes.ADD_CAR;
  constructor(public payload: CarAdd) {}
}
export class DeleteCarAction implements Action {
  readonly type = CarActionTypes.DELETE_CAR;
  constructor(public payload: string) {}
}
export type CarActions = AddCarAction | DeleteCarAction;
