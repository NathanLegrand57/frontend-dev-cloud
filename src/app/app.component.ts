import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';

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
    console.log('Environment:', environment);
    console.log('API URL:', environment.apiUrl);
    try {
      this.http.get(`${environment.apiUrl}/food`).subscribe((data: any) => {
        console.log('Retrieved data successfully', data);
        this.foodList = data;
      });
    } catch (error) {
      console.error(error);
    }
  }
}
