import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { DatePipe } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { differenceInMonths, differenceInDays, addMonths } from 'date-fns';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    DatePipe, 
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule, 
    MatMenuModule, 
    MatDividerModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  constructor(private router: Router) {}
  name: string = 'Nela';
  dateOfBirth: Date = new Date("2024-03-11");  
  pesel: string = '24231103844';
  medicover: string = '4646439';
  age = calculateAge(this.dateOfBirth);

  goToHome() {
    this.router.navigate(['/']); // Zakładając, że główna strona jest na '/' ścieżce
  }

}

function calculateAge(birthDate: Date): { months: number, days: number } {
  const today = new Date();
  const months = differenceInMonths(today, birthDate);
  const dateAfterMonths = addMonths(birthDate, months);
  const days = differenceInDays(today, dateAfterMonths);

  return { months, days };
}