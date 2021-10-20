import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from '../app.types';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  videos: Observable<Video[]> = this.http.get<Video[]>(
    'https://api.angularbootcamp.com/videos'
  );

  constructor(private http: HttpClient) {}
}
