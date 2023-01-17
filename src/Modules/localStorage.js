export const addLocalStorage = (arrBooks) => {
  const storage = localStorage.setItem('book', JSON.stringify(arrBooks));
  return storage;
};
export const getLocalStorage = () => {
  const storage = localStorage.getItem('book') === null
    ? []
    : JSON.parse(localStorage.getItem('book'));
  return storage;
};
