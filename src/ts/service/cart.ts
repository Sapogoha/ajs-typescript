import Buyable from '../domain/buyable';

export default class Cart {
  private _items: Buyable[] = [];
  add(item: Buyable): void {
    this._items.push(item);
  }
  get items(): Buyable[] {
    return [...this._items];
  }

  total(): number {
    return this._items.reduce((sum, current) => sum + current.price, 0);
  }

  totalAfterDiscount(discount: number): number {
    return this.total() * (1 - discount / 100);
  }

  remove(idToRemove: number): void {
    const toRemove = this._items.findIndex((item) => item.id === idToRemove);
    if (toRemove != -1) {
      this._items.splice(toRemove, 1);
    }
  }
}
