import { ClientMessage } from './../../models/client-message';
import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album';
import { AlbumService } from 'src/app/service/album.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  title = "List of Albums";
  public albums: Album[] = [];

  public clientMessage: ClientMessage = new ClientMessage(
    "sorry no albums available"
  );

  constructor(private albumServ: AlbumService) { }

  ngOnInit(): void {
  }

  findAllAlbums() {
    this.albumServ.findAllAlbums().subscribe((data) => {
      this.albums = data;
    });
  }

}
