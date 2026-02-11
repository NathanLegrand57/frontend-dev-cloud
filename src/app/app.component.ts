import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'frontend-dev-cloud';

  http: HttpClient;
  foodList: any[] = [];

  constructor(http: HttpClient) {
    this.http = http;
  }

  ngOnInit() {
    try {
      this.http.get('http://localhost:3000/api/food').subscribe((data: any) => {
        console.log('Retrieved data successfully', data);
        this.foodList = data;
      });
    } catch (error) {
      console.error(error);
    }
  }
}
