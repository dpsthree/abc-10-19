import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Video } from '../../app.types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent {
  @Input() videoList: Video[] = [];
  @Input() selectedVideo: Video| undefined;
  @Output() selectVideo = new EventEmitter<Video>();

  chooseVideo(video:Video) {
    this.selectVideo.emit(video);
  }
}

