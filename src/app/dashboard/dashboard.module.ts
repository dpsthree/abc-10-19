import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoPreviewComponent } from './video-preview/video-preview.component';

const routes: Routes = [{ path: '', component: VideoDashboardComponent }];

@NgModule({
  declarations: [
    VideoDashboardComponent,
    VideoListComponent,
    VideoPlayerComponent,
    VideoPreviewComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DashboardModule {}
