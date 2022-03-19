import { AlbumService } from 'src/app/service/album.service';
import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album';

@Component({
  selector: 'app-addalbum',
  templateUrl: './addalbum.component.html',
  styleUrls: ['./addalbum.component.css']
})
export class AddalbumComponent implements OnInit {

  public album = new Album(0,'','',0,[]);

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
  }

}
