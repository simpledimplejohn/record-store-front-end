import { Album } from 'src/app/models/album';
import { AlbumService } from 'src/app/service/album.service';
import { ClientMessage } from './../../models/client-message';
import { Track } from './../../models/track';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-albumdetails',
  templateUrl: './albumdetails.component.html',
  styleUrls: ['./albumdetails.component.css']
})
export class AlbumdetailsComponent implements OnInit {

  album: Album | undefined;

  title = "Track List: ";
  public tracks: Track[] = [];
  trackId: number = 1;

  public clientMessage: ClientMessage = new ClientMessage(
    "Album has no tracks"
  );

  constructor(
      private albumServ: AlbumService,
      private route: ActivatedRoute
      ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const albumIdFromRoute = Number(routeParams.get('albumId'));

    this.findAlbumTracks(albumIdFromRoute);

  }

  findAlbumTracks(id: number) {
    this.albumServ.findAlbumTracks(id).subscribe((data) => {
      this.tracks = data;
    })
  }

}
