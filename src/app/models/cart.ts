import { Customer } from './customer';
import { Album } from './album';
export class Cart {
  id: number;
  total: number;
  customer: Customer;
  albums: Album[];


  constructor(
    id: number,
    total: number,
    customer: Customer,
    albums: Album[]
) {
    this.id = id
    this.total = total
    this.customer = customer
    this.albums = albums
  }


}
