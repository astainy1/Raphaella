import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useState } from 'react';

export default function PaypalForm() {
  const [amount, setAmount] = useState("15.00");
  const [currency, setCurrency] = useState("USD");

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm mb-1">Select Currency</label>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="border rounded px-3 py-2 w-full"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>

      <div>
        <label className="block text-sm mb-1">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border rounded px-3 py-2 w-full"
          placeholder="Enter amount"
          min="1"
        />
      </div>

      <PayPalScriptProvider options={{
        'client-id': 'ATViD26D9_UPCpjCnb21yVsDD1mdzHf1sf0k0WNgjddHsMTsrWI1mAszDBV4rasfFnZZ8WeVHAyhBnPV',
        currency: currency
      }}>
        <PayPalButtons
          style={{ layout: 'vertical' }}
          forceReRender={[amount, currency]}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: amount,
                  currency_code: currency
                }
              }]
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              alert(`Thank you ${details.payer.name.given_name} for donating!`);
              console.log("Donation Details:", details);
              // Store in Strapi or your backend
            });
          }}
          onError={(err) => {
            console.error("PayPal error:", err);
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
}
