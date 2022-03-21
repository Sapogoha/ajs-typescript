import Album from '../domain/album';
import Book from '../domain/book';
import Movie from '../domain/movie';
import Cart from '../service/cart';

const album = new Album(1, 'название альбома', 'исполнитель', 100, 70);
const book = new Book(2, 'название книги', 'автор', 500, 367);
const movie = new Movie(
  3,
  'название фильма',
  'title',
  2021,
  ['Германия', 'Франция', 'Италия'],
  'какой - то слоган',
  ['комедия', 'драма'],
  125,
  150
);
const cart = new Cart();

test('new cart should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('add method - should add an item to a cart', () => {
  cart.add(album);
  expect(cart.items).toContain(album);
  cart.add(book);
  expect(cart.items).toContain(book);
  cart.add(movie);
  expect(cart.items).toEqual([album, book, movie]);
});

test('total method - should count the total cost of all items in the cart', () => {
  expect(cart.total()).toBe(album.price + book.price + movie.price);
});

test('totalAfterDiscount method - should count the total cost of all items in the cart, including the discount', () => {
  expect(cart.totalAfterDiscount(50)).toBe(
    (album.price + book.price + movie.price) / 2
  );
});

test('remove method - should remove an item from a cart', () => {
  cart.remove(3);
  expect(cart.items).toEqual([album, book]);
  expect(cart.items).not.toContain(movie);
});
