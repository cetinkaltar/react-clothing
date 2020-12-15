import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price *100;
    const publishableKey = 'pk_test_51HxcBUEvPO8f78HD2GOlIJ8AuhOxkFNdv1TnfFYWNIrDWL9NV5sGiCB69m9V4O9CevqOChPTohyjBhMGH2LLVuNM00boeCONHf';

    const onToken = (token) => {
        console.log(token);
      }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Cetin Giyim'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;