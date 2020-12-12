import React from 'react';
import { connect } from 'react-redux';
import { addItem, removeItem, clearItem } from "../../redux/cart/cart.actions";



import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { id, name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="ítem" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(id)}>
          &#10096;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10097;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => clearItem(id)}>
        &#10006;
      </div>
    </div>
  );
};



export default connect(null, {clearItem,addItem,removeItem})(CheckoutItem);