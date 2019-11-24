import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';

import { YouTubePlayerModule } from '@angular/youtube-player';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { LocalPlayerComponent } from './local-player/local-player.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    LocalPlayerComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatToolbarModule,
    YouTubePlayerModule,
  ],
  providers: [],
  entryComponents: [PlayerComponent, LocalPlayerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
