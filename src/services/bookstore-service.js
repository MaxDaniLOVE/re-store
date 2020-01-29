export default class BookstoreService {
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
  getBooks() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(this.data)
      }, 421);
    });
  }
}