import { Component, Input } from '@angular/core';
import { Video } from '../../app.types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent {
  @Input() videoList: Video[] = [];
  selectedVideo: Video| undefined;

  selectVideo(video:Video) {
    this.selectedVideo = video;
  }
}

