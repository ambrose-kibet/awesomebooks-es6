import { addLocalStorage, getLocalStorage } from './localStorage';

const cardsContainer = document.querySelector('#cards');
const displayBooks = (arrBooks = getLocalStorage()) => {
  const displayBook = arrBooks
    .map(
      (item) => `
      <tr id="tr${item.id}">
      <td class="text-start"><span>"${item.title}"  By  ${item.author}</span></td>
      <td class="text-end"><button class="btn btn-secondary remove " data-id="${item.id}">remove</button></td>
    </tr>`,
    )
    .join(' ');
  cardsContainer.innerHTML = displayBook;
  const removeBtns = cardsContainer.querySelectorAll('.remove');
  removeBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const parent = e.target.parentElement.parentElement;
      const bookId = e.target.dataset.id;
      cardsContainer.removeChild(parent);
      let newBooks = getLocalStorage();
      newBooks = newBooks.filter((book) => book.id.toString() !== bookId);
      addLocalStorage(newBooks);
    });
  });
};

export default displayBooks;
