/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useRef } from 'react';

const PaypalBtn = ({ total, address, mobile, state, dispatch }) => {
  const refPaypalBtn = useRef();
  const { cart, auth } = state;

  useEffect(() => {
    paypal
      .Buttons({
        createOrder: function (data, actions) {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: total,
                },
              },
            ],
          });
        },
        onApprove: function (data, actions) {
          return actions.order.capture().then(function (details) {
            alert('Transaction completed by ' + details.payer.name.given_name);
          });
        },
      })
      .render(refPaypalBtn.current);
  }, []);

  return <div ref={refPaypalBtn}></div>;
};

export default PaypalBtn;
