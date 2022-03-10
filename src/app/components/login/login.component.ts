import { ClientMessage } from './../../models/client-message';
import { CustomerService } from './../../service/customer.service';
import { Customer } from './../../models/customer';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError, catchError } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  // an array of the customers
  public customerArray: Customer[] = []
  public customer = new Customer(0, '', '', '', '', '','')
  public clientMessage = new ClientMessage('')

  constructor(private customerService: CustomerService) { }


  public addCustomer() : void {
    // calls the service layer and adds the customer object made above
    this.customerService.addCustomer(this.customer)
      .subscribe(
        data => this.clientMessage.message = `Sucessfully added ${data.firstName}`,
        error => this.clientMessage.message = `Error was ${error}`
      )
    console.log(this.customer)


  }





}
