import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Customer } from '../models/customer';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';
import { GlobalConstants } from '../components/global-constants';

// the url of the api
const url = `${GlobalConstants.apiUrl}customers`;

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  public addCustomer(customer : Customer) : Observable<Customer> {
    // sends a customer in the body of the request
    return this.http.post<Customer>(`${url}/add`, customer, this.httpOptions)
      .pipe(catchError(this.handleError))

  }


  // standard HTTP error handling method
  private handleError(httpError: HttpErrorResponse) {
    // first get the error message
    if(httpError.error instanceof ErrorEvent) {
      console.log('An error occurred: ', httpError.error.message)
    } else {
      console.error(`
      **Backend returned code ${httpError.status},
      body was: ${httpError.error}
      `)
    }
    // throwError is an Observable form RxJS
    // then return the error
    return throwError(() => new Error('something bad happened'));
  }

}
