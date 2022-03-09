export class Album {

  id: number
  albumName: string
  releaseDate: string
  price: number

  constructor (
    id: number,
    albumName: string,
    releaseDate: string,
    price: number
  ) {
    this.id = id
    this.albumName = albumName
    this.releaseDate = releaseDate
    this.price = price
  }
}
