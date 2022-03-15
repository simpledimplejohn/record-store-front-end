import { AlbumService } from 'src/app/service/album.service';
import { ClientMessage } from './../../models/client-message';
import { Track } from './../../models/track';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albumdetails',
  templateUrl: './albumdetails.component.html',
  styleUrls: ['./albumdetails.component.css']
})
export class AlbumdetailsComponent implements OnInit {

  title = "Track List: ";
  public tracks: Track[] = [];
  trackId: number = 1;

  public clientMessage: ClientMessage = new ClientMessage(
    "Album has no tracks"
  );

  constructor(private albumServ: AlbumService) { }

  ngOnInit(): void {
    this.findAlbumTracks(this.trackId);

  }

  findAlbumTracks(id: number) {
    this.albumServ.findAlbumTracks(id).subscribe((data) => {
      this.tracks = data;
    })
  }

}
