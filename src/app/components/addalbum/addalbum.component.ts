import { Track } from './../../models/track';
import { ClientMessage } from './../../models/client-message';
import { AlbumService } from 'src/app/service/album.service';
import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addalbum',
  templateUrl: './addalbum.component.html',
  styleUrls: ['./addalbum.component.css']
})
export class AddalbumComponent implements OnInit {

  public album = new Album(0,'','',0,[]);
  public clientMessage = new ClientMessage('');
  public track = new Track(0,'','');

  addAlbumForm = this.fb.group({
    albumName: [""],
    releaseDate: [''],
    price: [0]
  })

  constructor(private albumService: AlbumService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public addAlbum() : void {
    this.albumService.addAlbum(this.album)
      .subscribe(
        data => this.clientMessage.message = `Successfully added ${data.albumName}`,
        error => this.clientMessage.message = `Error was ${error}`
      );
      console.log(this.album);
  }

}
