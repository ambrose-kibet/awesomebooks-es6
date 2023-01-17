import Books from './Modules/books';
import { addLocalStorage, getLocalStorage } from './Modules/localStorage';
import displayBooks from './Modules/dispalybook';
import './index.css';
import date from './Modules/date';

const form = document.querySelector('#form');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const warningLabel = document.querySelector('.warningLabel');
const booksList = document.querySelector('.books-list');
const addNew = document.querySelector('.add-new');
const contact = document.querySelector('.contact');
const navlist = document.querySelector('.navlist');
const navadd = document.querySelector('.navadd');
const navcontact = document.querySelector('.navcontact');

document.querySelector('.date-display').innerHTML = date;

// array
let arrBooks;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (bookTitle.value === '' || bookAuthor.value === '') {
    warningLabel.classList.remove('d-none');
  } else {
    warningLabel.classList.add('d-none');
    const id = new Date().getTime();
    const book = new Books(id, bookTitle.value, bookAuthor.value);
    arrBooks = [...getLocalStorage(), book];
    bookTitle.value = '';
    bookAuthor.value = '';
    addLocalStorage(arrBooks);
    displayBooks(arrBooks);
  }
});

window.addEventListener('DOMContentLoaded', () => {
  arrBooks = getLocalStorage();
  displayBooks(arrBooks);
});

navlist.onclick = () => {
  booksList.classList.remove('d-none');
  addNew.classList.add('d-none');
  contact.classList.add('d-none');
};
navadd.onclick = () => {
  booksList.classList.add('d-none');
  addNew.classList.remove('d-none');
  contact.classList.add('d-none');
};
navcontact.onclick = () => {
  booksList.classList.add('d-none');
  addNew.classList.add('d-none');
  contact.classList.remove('d-none');
};
