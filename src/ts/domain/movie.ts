import Buyable from './buyable';

export default class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly originalName: string,
    readonly year: number,
    readonly country: string[],
    readonly slogan: string,
    readonly genre: string[],
    readonly timing: number,
    readonly price: number
  ) {}
}
