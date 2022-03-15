import { Observable, throwError } from 'rxjs';
import { localUrl } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Track } from '../models/track';

const url = `${localUrl}track`

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
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
