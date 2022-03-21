import Buyable from './buyable';

export default class Album implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly musician: string,
    readonly price: number,
    readonly timing: number
  ) {}
}
