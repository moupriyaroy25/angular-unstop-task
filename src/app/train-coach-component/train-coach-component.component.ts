import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-train-coach-component',
  templateUrl: './train-coach-component.component.html',
  styleUrls: ['./train-coach-component.component.css'],
})
export class TrainCoachComponentComponent {
  coach: string[][] = [];
  selectedSeats: number[] = [];

  constructor() {
    this.initializeCoach();
  }

  initializeCoach(): void {
    const numSeats = 80;
    const seatsPerRow = 7;
    const lastRowSeats = 3;

    const numFullRows = Math.floor(numSeats / seatsPerRow);
    const remainingSeats = numSeats % seatsPerRow;

    for (let i = 0; i < numFullRows; i++) {
      this.coach[i] = Array(seatsPerRow).fill('O');
    }
    this.coach[numFullRows] = Array(lastRowSeats).fill('O');
    this.coach[numFullRows] = this.coach[numFullRows].concat(
      Array(seatsPerRow - lastRowSeats).fill('')
    );
  }

  reserveSeat(row: number, col: number): void {
    if (this.coach[row][col] === 'O') {
      this.coach[row][col] = 'S'; // Mark seat as selected

      // Add selected seat to the list
      const seatNumber = row * 7 + col + 1;
      this.selectedSeats.push(seatNumber);
    } else if (this.coach[row][col] === 'S') {
      this.coach[row][col] = 'O'; // Deselect seat

      // Remove seat from the selected seats list
      const seatNumber = row * 7 + col + 1;
      const index = this.selectedSeats.indexOf(seatNumber);
      if (index > -1) {
        this.selectedSeats.splice(index, 1);
      }
    }
  }
}
