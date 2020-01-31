export default class BookstoreService {
  _bookApi = 'https://api.itbook.store/1.0/'
  _proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  async getResource(url) {
    const res = await fetch(`${this._proxyUrl}${url}`);
    if (!res.ok) {
      throw new Error('something wromg...')
    }
    const data = await res.json();
    return data;
  }
  _trandformBook = (book) => {
    return {
      id: book.isbn13,
      title: book.title,
      author: book.subtitle,
      image: book.image,
      price: parseInt((book.price).slice(1), 10),
    }
  }
  getBooks = async () => {
    const res = await this.getResource(`${this._bookApi}new`);
    return (res.books).map(this._trandformBook);
  }
  getBookInfo = async (id) => {
    const res = await this.getResource(`${this._bookApi}books/${id}`);
    return res;
  }
}