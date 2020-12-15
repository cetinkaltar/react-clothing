import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden, itemCount}) =>(
      <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
      </div>
    );

    CartIcon.propTypes = {
      toggleCartHidden: PropTypes.func.isRequired,
      itemCount: PropTypes.number
    };

    CartIcon.defaultProps = {
      itemCount: 0
    };

export default connect(
  createStructuredSelector({
    itemCount: selectCartItemsCount,
  }),
  {
    toggleCartHidden,
  }
)(CartIcon);