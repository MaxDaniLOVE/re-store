export default class BookstoreService {
  _bookApi = 'https://api.itbook.store/1.0/new'
  data = [
    {
      id: 1,
      title: 'How to Stop Worrying and Start Living (1948)',
      author: 'Dale Carnegie',
      image: 'https://images-na.ssl-images-amazon.com/images/I/519kpSZoD2L._SX342_.jpg',
      price: 9.99
    },
    {
      id: 2,
      title: 'Becoming (2018)',
      author: 'Michelle Obama',
      image: 'https://images-na.ssl-images-amazon.com/images/I/414JfiBCutL._SX327_BO1,204,203,200_.jpg',
      price: 11.89
    }
  ];
  async getResource(url) {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const res = await fetch(proxyUrl + url);
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
    const res = await this.getResource(this._bookApi);
    return (res.books).map(this._trandformBook);
  }
}