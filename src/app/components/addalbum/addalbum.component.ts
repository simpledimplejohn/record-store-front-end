import { Track } from './../../models/track';
import { ClientMessage } from './../../models/client-message';
import { AlbumService } from 'src/app/service/album.service';
import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addalbum',
  templateUrl: './addalbum.component.html',
  styleUrls: ['./addalbum.component.css']
})
export class AddalbumComponent implements OnInit {

  // public album = new Album(0,'','',0,[]);
  public clientMessage = new ClientMessage('');
  // public track = new Track(0,'','');

  addAlbumForm!: FormGroup;



  constructor(private albumService: AlbumService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addAlbumForm = this.fb.group({
      albumName: [""],
      releaseDate: [''],
      price: [0],
      tracks: this.fb.array([
        this.fb.control('')
      ])
    })
  }

  public addAlbum() : void {


    this.albumService.addAlbum(this.addAlbumForm.value)
      .subscribe(
        (data) => {
          this.clientMessage.message = `Successfully added ${data.albumName}`
          console.log(data)
        },
        error => this.clientMessage.message = `Error was ${error}`

      );
  }


  get tracks() {
    return this.addAlbumForm.get('tracks') as FormArray;
  }

  addTracks() {
    this.tracks.push(this.fb.control(''));
  }

}
