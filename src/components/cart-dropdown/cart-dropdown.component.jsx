import React  from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import './cart-dropdown.styles.scss';

const CartDropDown = ({ cartItems, history }) =>{
    return (
      <div className="cart-dropdown">
        <div className="cart-items">
          {cartItems.length ? (
            cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
          ) : (
            <span className="empty-message"> Cart is Empty</span>
          )}
        </div>
        <CustomButton
          onClick={() => {
            history.push("/checkout");
            toggleCartHidden();
          }}
        >
          GO TO CHECKOUT
        </CustomButton>
      </div>
    );
}

const mapStateToProps = (state) =>({
    cartItems: selectCartItems(state),
    hidden: state.cart.hidden
})

export default withRouter(connect(mapStateToProps,
    {toggleCartHidden})(CartDropDown));