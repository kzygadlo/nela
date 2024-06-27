import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePipe } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatePipe, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  name: string = 'Nela';
  dateOfBirth: Date = new Date("2024-03-11");  
}
