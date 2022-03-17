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

  // album: Album | undefined; does this work?

  public album = new Album(0,'','',0);

  title = "Track List: ";
  public tracks: Track[] = [];


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

    this.findAlbumDetails(albumIdFromRoute);

  }

  findAlbumDetails(id: number) {
    this.albumServ.findAlbumTracks(id).subscribe((data) => {
      this.tracks = data;
    })
  }

}
