import { Component, OnInit } from '@angular/core';
import { AppState } from '../store/models/app.model';
import { CarAdd } from '../store/models/car.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
@Component({
  selector: 'testcomponent',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  carslist: Observable<Array<CarAdd>>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.carslist = this.store.select((store) => store.cars);
  }
}
