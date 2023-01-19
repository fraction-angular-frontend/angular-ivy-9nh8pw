import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { CarReducer } from './store/reducers';
import { TestComponent } from './components/test.component';

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      cars: CarReducer,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
