export class Album {

  id: number
  albumName: string
  releaseDate: string
  price: number
  trackList: []


  constructor(
    id: number,
    albumName: string,
    releaseDate: string,
    price: number,
    trackList: []
) {
    this.id = id
    this.albumName = albumName
    this.releaseDate = releaseDate
    this.price = price
    this.trackList = trackList
  }

}
