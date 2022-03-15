import { Track } from './../models/track';
import { Observable, throwError, catchError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { localUrl } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Album } from '../models/album';

const url = `${localUrl}album`

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  findAllAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(url)
      .pipe(catchError(this.handleError));
  }

  findAlbumTracks(id: number): Observable<Track[]> {
    return this.http.get<Track[]>(`${url}/findAlbumTracks/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(httpError: HttpErrorResponse) {

    if (httpError.error instanceof ErrorEvent) {
      console.log('An error occurred: ', httpError.error.message)
    } else {
      console.error(`
        Backend returned code ${httpError.status},
        body was: ${httpError.error}
      `);
    }

    // throwError is an Observable object from RxJS Reactive Extensions for JavaScript
    return throwError(() => new Error('Something really bad happened, please try again later'));
  }
}
