import { CarAdd } from '../models/car.model';
import { CarActions, CarActionTypes } from '../actions/car.action';

const initialState: Array<CarAdd> = [
  {
    id: '123-456-789',
    name: 'Aditya',
    cnumber: 'kaz234',
  },
];

export function CarReducer(
  state: Array<CarAdd> = initialState,
  action: CarActions
) {
  switch (action.type) {
    case CarActionTypes.ADD_CAR:
      return [...state, action.payload];
    case CarActionTypes.DELETE_CAR:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}
