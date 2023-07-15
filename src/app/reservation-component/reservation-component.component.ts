import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-component',
  templateUrl: './reservation-component.component.html',
  styleUrls: ['./reservation-component.component.css'],
})
export class ReservationComponentComponent {
  numSeats: number = 1;
  selectedSeats: number[] = [];

  bookSeats(): void {
    const numSeatsToBook = this.numSeats;

    this.selectedSeats = [];
  }

  getSelectedSeats(): number[] {
    const selectedSeats: number[] = [];
    const rows = document.querySelectorAll('.selected');

    rows.forEach((row) => {
      const seatNumbers = Array.from(
        row.getElementsByClassName('selected')
      ).map((seat) => Number(seat.textContent));
      selectedSeats.push(...seatNumbers);
    });

    return selectedSeats;
  }
}
