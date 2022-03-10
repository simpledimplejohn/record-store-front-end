import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Customer } from '../models/customer';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';
import { localUrl } from 'src/environments/environment';

// the url of the api
const url = `${localUrl}customers`;

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
    return this.http.post<Customer>(`${url}/adb`, customer, this.httpOptions)
      .pipe(catchError(this.handleError))

  }

  public findAllCustomers() : Observable<Customer[]> {
    // send a GET request
    // or handle error
    // returns an observable so needs a pipe
    return this.http.get<Customer[]>(url) // will reach the rest controller
      .pipe(catchError(this.handleError)) // similar to then

  }
  // standard HTTP error handling method
  private handleError(httpError: HttpErrorResponse) {
    // first get the error message
    if(httpError.error instanceof ErrorEvent) {
      console.log('An error occurred: ', httpError.error.message)
    } else {
      console.error(`
      Backend returned code ${httpError.status},
      body was: ${httpError.error}
      `)
    }
    // throwError is an Observable form RxJS
    // then return the error
    return throwError(() => new Error('something bad happened'));
  }

}
