import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../../app.types';

@Component({
  selector: 'app-video-preview',
  templateUrl: './video-preview.component.html',
  styleUrls: ['./video-preview.component.scss']
})
export class VideoPreviewComponent implements OnInit {
  @Input() video: Video | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
