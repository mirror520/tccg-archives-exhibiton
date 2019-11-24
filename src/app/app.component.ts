import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { PlayerComponent } from './player/player.component';
import { LocalPlayerComponent } from './local-player/local-player.component';
import { VideoData } from './player/video-data';
import { LocalVideoData } from './local-player/local-video-data';
import { ComponentType } from '@angular/cdk/portal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tccg-archives-exhibiton';

  taichungCitySongId = "CMkah1afb4o";
  taichungCountySongId = "veBJsv0i3hA";

  taichungCitySongFilename = "taichung_city_song.m3u8";
  taichungCountySongFilename = "taichung_county_song.m3u8";

  @ViewChild('videoSource', { static: false })
  videoSource:MatSlideToggle;

  constructor(
    public dialog:MatDialog
  ) {}

  openTaichungCitySongDialog(): void {
    let target: ComponentType<PlayerComponent | LocalPlayerComponent>;
    let videoData: VideoData | LocalVideoData = null;

    if (!this.videoSource.checked) {
      target = LocalPlayerComponent;

      videoData = {
        filename: this.taichungCitySongFilename,
        width: 900,
        height: 700
      };
    } else {
      target = PlayerComponent;

      videoData = {
        id: this.taichungCitySongId,
        width: 900,
        height: 700
      };
    }

    this.dialog.open(target, {
      width: '80%',
      height: '80%',
      data: videoData,
    });
  }

  openTaichungCountySongDialog(): void {
    let target: ComponentType<PlayerComponent | LocalPlayerComponent>;
    let videoData: VideoData | LocalVideoData = null;

    if (!this.videoSource.checked) {
      target = LocalPlayerComponent;

      videoData = {
        filename: this.taichungCountySongFilename,
        width: 900,
        height: 700
      };
    } else {
      target = PlayerComponent;

      videoData = {
        id: this.taichungCountySongId,
        width: 900,
        height: 700
      };
    }

    this.dialog.open(target, {
      width: '80%',
      height: '80%',
      data: videoData,
    });
  }
}
