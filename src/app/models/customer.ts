import { Cart } from "./cart";

export class Customer {
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  email: string;
  address: string;
  cart: Cart;



  constructor(
    id: number,
    firstName: string,
    lastName: string,
    userName: string,
    password: string,
    email: string,
    address: string,
    cart: Cart
) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.userName = userName
    this.password = password
    this.email = email
    this.address = address
    this.cart = cart
  }


}
