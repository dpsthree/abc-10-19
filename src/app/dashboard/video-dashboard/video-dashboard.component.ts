import { Component, OnInit } from '@angular/core';
import { Video } from '../../app.types';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss'],
})
export class VideoDashboardComponent implements OnInit {
  videos: Video[] = [];
  selectedVideo: Video | undefined;
  constructor(private dashboardService: DashboardService) {
    dashboardService.videos.subscribe((videoList) => (this.videos = videoList));
  }

  ngOnInit(): void {}

  updateSelectedVideo(video: Video) {
    this.selectedVideo = video;
  }
}
