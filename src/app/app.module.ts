import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ReservationComponentComponent } from './reservation-component/reservation-component.component';
import { TrainCoachComponentComponent } from './train-coach-component/train-coach-component.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ReservationComponentComponent,
    TrainCoachComponentComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
