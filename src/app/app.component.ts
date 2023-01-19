import { Component, OnInit } from '@angular/core';
import { AppState } from './store/models/app.model';
import { CarAdd } from './store/models/car.model';
import { DeleteCarAction, AddCarAction } from './store/actions/car.action';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showadd = false;
  carslist: Observable<Array<CarAdd>>;
  carinput = {
    name: '',
    cnumber: '',
    id: '',
  };

  pattern = '^[A-Z]{3}[0-9]{3}';

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.carslist = this.store.select((store) => store.cars);
  }
  toggleCar() {
    this.showadd = !this.showadd;
  }
  saveCar() {
    this.carinput.id = uuid();
    this.store.dispatch(new AddCarAction(this.carinput));
    this.carinput = {
      name: '',
      cnumber: '',
      id: uuid(),
    };
  }
  deleteCar(id) {
    this.store.dispatch(new DeleteCarAction(id));
  }
}
