import { Customer } from './customer';
import { Album } from './album';
export class Cart {
  id: number;
  total: number;



  constructor(
    id: number,
    total: number,

) {
    this.id = id
    this.total = total

  }


}
