
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

const CheckOutFrom = () => {
  const { user } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [agreement, setAgreement] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
const [transactionId,setTransactionId] = useState('');
  const totalPrice = agreement?.rent;
console.log(clientSecret);
  // Fetch the user's agreement
  useEffect(() => {
    let isMounted = true; // To prevent state updates on unmounted components
    const fetchAgreement = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/agreements?email=${user?.email}`);
        if (isMounted && response.data && response.data.length > 0) {
          setAgreement(response.data[0]);
        }
      } catch (err) {
        console.error("Failed to fetch agreement data:", err);
        setError("Unable to load agreement. Please try again later.");
      }
    };
    fetchAgreement();
    return () => (isMounted = false); // Cleanup
  }, [user?.email]);

  // Fetch clientSecret for payment intent
  useEffect(() => {
    if (totalPrice) {
      const fetchClientSecret = async () => {
        try {
          const response = await axios.post(`http://localhost:5000/create-payment-intent`, {
            price: totalPrice,
          });
          setClientSecret(response?.data?.clientSecret);
        } catch (err) {
          console.error("Failed to create payment intent:", err);
          setError("Unable to process payment. Please try again later.");
        }
      };
      fetchClientSecret();
    }
  }, [totalPrice]);

  // Handle payment submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (stripeError) {
      console.error("Payment Method Error:", stripeError);
      setError(stripeError.message);
    } else {
      console.log("Payment Method Success:", paymentMethod);
      setError("");
    }

    //confirm payment
    const {paymentIntent,error:confirmError}=await stripe.confirmCardPayment(clientSecret,{
        payment_method:{
            card:card,
            billing_details:{
                email:user?.email || 'n/a',
                name:user?.displayName  || 'n/a'
            }
        }
    })
    if(confirmError){
        console.log('confirm error');
    }
    else{
        console.log('payment intent',paymentIntent);
        if(paymentIntent.status === 'succeeded'){
            console.log("transaction id",paymentIntent.id);
            setTransactionId(paymentIntent.id)
        }
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="w-full py-2 bg-green-600 text-white rounded-md mt-4 hover:bg-green-700"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {transactionId && <p className="text-green-500">Your transaction id:{transactionId}</p>}
    </form>
  );
};

export default CheckOutFrom;
