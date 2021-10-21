import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from '../../app.types';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss'],
})
export class VideoDashboardComponent implements OnInit {
  videos: Observable<Video[]>;
  selectedVideo: Video | undefined;
  constructor(dashboardService: DashboardService) {
    this.videos = dashboardService.videos;
  }

  ngOnInit(): void {}

  updateSelectedVideo(video: Video) {
    this.selectedVideo = video;
  }
}
