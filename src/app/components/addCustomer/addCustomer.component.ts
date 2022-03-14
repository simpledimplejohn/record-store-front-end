import { ClientMessage } from '../../models/client-message';
import { CustomerService } from '../../service/customer.service';
import { Customer } from '../../models/customer';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError, catchError } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Cart } from 'src/app/models/cart';
import { Album } from 'src/app/models/album';

@Component({
  selector: 'app-addCustomer',
  templateUrl: './addCustomer.component.html',
  styleUrls: ['./addCustomer.component.css']
})
export class AddCustomerComponent  {
  // an array of the customers

  public customer = new Customer(0, '', '', '', '', '','', new Cart(0,0))
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
