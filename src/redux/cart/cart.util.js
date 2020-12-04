export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );
    console.log('existing');
    if(existingCartItem){
        console.log('existing');
        return cartItems.map(cartItem => (
            cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity +1}
            :cartItem
        ))
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
    
};

export const clearItemFromCart = (cartItems, id) => {
    return cartItems.filter(item => item.id !== id)
};

export const removeItemFromCart = (cartItems, id) => {
   return cartItems.map(cartItem => (
        cartItem.id === id
        ? {...cartItem, quantity: cartItem.quantity -1}
        :cartItem
    )).filter(item=>item.quantity > 0)

    
};