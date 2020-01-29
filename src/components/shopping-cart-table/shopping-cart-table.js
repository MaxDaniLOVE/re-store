import React from 'react';
import './shopping-cart-table.css'

const ShoppingCartTable = () => {
  return (
    <div className="shopping-cart">
      <table className="table shopping-cart-table">
        <thead className="shopping-cart-table-header">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Count</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="shopping-cart-table tr">
            <th>1</th>
            <td>How to Stop Worrying and Start Living (1948)</td>
            <td>1</td>
            <td>9.99$</td>
            <td className="td-btns">
              <button className="btn btn-success cart-btn">
                <i className="fa fa-plus-square"></i>
              </button>
              <button className="btn btn-warning cart-btn">
                <i className="fa fa-minus-square"></i>
              </button>
              <button className="btn btn-danger cart-btn">
                <i className="fa fa-trash"></i>
              </button>
            </td>
          </tr>
          <tr className="shopping-cart-table tr">
            <th>1</th>
            <td>How to Stop Worrying and Start Living (1948)</td>
            <td>1</td>
            <td>9.99$</td>
            <td className="td-btns">
              <button className="btn btn-success cart-btn">
                <i className="fa fa-plus-square"></i>
              </button>
              <button className="btn btn-warning cart-btn">
                <i className="fa fa-minus-square"></i>
              </button>
              <button className="btn btn-danger cart-btn">
                <i className="fa fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table> 
      <h5 className="shopping-cart-total">Total: 228$</h5>
    </div>
    
  );
}

export default ShoppingCartTable;
