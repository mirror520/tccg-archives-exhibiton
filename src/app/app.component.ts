import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlayerComponent } from './player/player.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tccg-archives-exhibiton';

  taichungCitySongId = "CMkah1afb4o";
  taichungCountySongId = "veBJsv0i3hA";

  constructor(
    public dialog:MatDialog
  ) {}

  openTaichungCitySongDialog(): void {
    const dialogRef = this.dialog.open(PlayerComponent, {
      width: '80%',
      height: '80%',
      data: { 
        id: this.taichungCitySongId,
        width: 900,
        height: 700
      }
    });
  }

  openTaichungCountySongDialog(): void {
    const dialogRef = this.dialog.open(PlayerComponent, {
      width: '80%',
      height: '80%',
      data: { 
        id: this.taichungCountySongId,
        width: 900,
        height: 700
      }
    });
  }
}
