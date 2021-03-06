import { Track } from './../../models/track';
import { ClientMessage } from './../../models/client-message';
import { AlbumService } from 'src/app/service/album.service';
import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addalbum',
  templateUrl: './addalbum.component.html',
  styleUrls: ['./addalbum.component.css']
})
export class AddalbumComponent  {

  // public album = new Album(0,'','',0,[]);
  public clientMessage = new ClientMessage('');
  public track!: Track

  addAlbumForm: FormGroup;



  constructor(private albumService: AlbumService, private fb: FormBuilder) {
    this.addAlbumForm = this.fb.group({
      albumName: [""],
      releaseDate: [''],
      price: [0],
      trackList: this.fb.array([])
    })
  }

  get trackList() : FormArray {
    return this.addAlbumForm.get('trackList') as FormArray;
  }

  newTrack(): FormGroup {
    return this.fb.group({
      title: '',
      duration: ''
    })
  }

  addTrack() {
    this.trackList.push(this.newTrack());
  }

  removeTrack(i:number) {
    this.trackList.removeAt(i);
  }

  onSubmit() {

  }


  public addAlbum() : void {
    console.log("form.value: "+this.addAlbumForm.value);

    this.albumService.addAlbum(this.addAlbumForm.value)
      .subscribe(
        (data) => {
          this.clientMessage.message = `Successfully added ${data.albumName}`
          console.log("submit data: "+data)
        },
        error => this.clientMessage.message = `Error was ${error}`

      );
  }



}
