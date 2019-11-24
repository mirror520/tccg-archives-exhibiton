import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VideoData } from './video-data';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @ViewChild('player', { static: false }) player: YouTubePlayer;

  constructor(
    public dialogRef: MatDialogRef<PlayerComponent>,
    @Inject(MAT_DIALOG_DATA) public data:VideoData
  ) {}

  ngOnInit() {
    const tag = document.createElement('script');
    window['YTConfig'] = {
      playerVars: {
        controls: 0,
        autoplay: 1,
        fs: 0,
      }
    };

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

  readyHandler(event) {
    console.log('ready');

    // interval(500).pipe(
    //   takeWhile(() => this.player == null)
    // ).subscribe({
    //   next: n => console.log(n),
    //   error: err => console.error(err),
    //   complete: () => this.startVideo()
    // });
  }

  stateChangeHandler(event) {
    console.log(event.data);

    switch (event.data) {
      case YT.PlayerState.ENDED:
        this.dialogRef.close();
        break;

      case YT.PlayerState.PAUSED:
        this.play();
        break;
    }
  }

  play() {
    this.player.playVideo();

    console.log('play: ', this.player);
  }

  stop() {
    this.player.stopVideo();

    console.log('stop');
  }
}
