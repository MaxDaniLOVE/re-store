import React from 'react';
import './shopping-cart-table.css'
import { connect } from 'react-redux';

const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {
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
          {
            items.map((item, idx) => {
              const {id, title, total, count} = item
              return (
              <tr key={id} className="shopping-cart-table tr">
                <th>{idx + 1}</th>
                <td>{title}</td>
                <td>{count}</td>
                <td>{`$${total}`}</td>
                <td className="td-btns">
                  <button
                    className="btn btn-success cart-btn"
                    onClick={() => onIncrease(id)}
                    >
                    <i className="fa fa-plus-square"></i>
                  </button>
                  <button
                    className="btn btn-warning cart-btn"
                    onClick={() => onDecrease(id)}
                    >
                    <i className="fa fa-minus-square"></i>
                  </button>
                  <button
                    className="btn btn-danger cart-btn"
                    onClick={() => onDelete(id)}
                    >
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
              )
            })
          }
        </tbody>
      </table> 
      <h5 className="shopping-cart-total">Total: ${total}</h5>
    </div>
    
  );
}

const mapStateToProps = (state) => { // set props of component
  return {
    items: state.cartItems,
    total: state.orderTotal,
  }
}

const mapDispatchToProps = () => {
  return { //todo read more about bindActionCreators
    onIncrease: (id) => console.log(`inc ${id}`),
    onDecrease: (id) => console.log(`dec ${id}`),
    onDelete: (id) => console.log(`del ${id}`),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
