import { Component, AfterViewInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LocalVideoData } from './local-video-data';

declare let videojs: any;

@Component({
  selector: 'app-local-player',
  templateUrl: './local-player.component.html',
  styleUrls: ['./local-player.component.scss']
})
export class LocalPlayerComponent implements AfterViewInit {

  @ViewChild('player', { static: false })
  player: ElementRef;

  constructor(
    public dialogRef: MatDialogRef<LocalPlayerComponent>,
    @Inject(MAT_DIALOG_DATA) public data:LocalVideoData
  ) {}

  ngAfterViewInit() {
    const options = {
      controls: false,
      autoplay: true,
      loop: false,
      preload: 'auto',
      techOrder: ['html5']
    };

    const videoObj = new videojs(this.player.nativeElement, options, function onPlayerReady() {
      videojs.log('Your player is ready!');
    });

    this.player.nativeElement.addEventListener('pause', () => {
      videojs.log('pause');
      videoObj.play()
    });

    this.player.nativeElement.addEventListener('ended', () => {
      this.dialogRef.close();
    });

    this.dialogRef.afterClosed().subscribe(
      () => { videojs(this.player.nativeElement).dispose(); }
    );
  }
}
