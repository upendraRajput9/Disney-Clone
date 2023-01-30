import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import db, { auth } from "../firebase";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

export default function PaymentForm() {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "https://payment-link-mu.vercel.app/payment",
          {
            amount: 1000,
            id,
          }
        );

        if (response.data.sucess) {
          var user = await auth.currentUser;
          const plansDocRef = doc(db, "plans", user.uid);
          let name = await location.state.name;

          let today = new Date();
          let renewal = new Date();
          await renewal.setDate(today.getDate() + 28);
          var isoDateTime = await new Date(today);
          renewal = await isoDateTime.toLocaleDateString();

          if (name === "Basic") {
            await updateDoc(plansDocRef, {
              current_plan: "Basic",
              renewal_date: renewal,
              "basic.active": true,
              "standard.active": false,
              "premium.active": false,
            });
          } else if (name === "Standard") {
            await updateDoc(plansDocRef, {
              current_plan: "Standard",
              renewal_date: renewal,
              "basic.active": false,
              "standard.active": true,
              "premium.active": false,
            });
          } else if (name === "Premium") {
            await updateDoc(plansDocRef, {
              current_plan: "Permium",
              renewal_date: renewal,
              "basic.active": false,
              "standard.active": false,
              "premium.active": true,
            });
          }
          navigate("/");
        }
      } catch (error) {
        alert("Enter a correct details");
      }
    } else {
      alert("Enter a correct details");
    }
  };

  useEffect(() => {
    if (!location.state) {
      navigate("/profile");
    }
  }, []);

  return (
    <div className="payment">
      <form onSubmit={handleSubmit}>
        <fieldset className="FormGroup">
          <div className="FormRow">
            <CardElement options={CARD_OPTIONS} />
          </div>
        </fieldset>
        <button>Subscribe</button>
      </form>
    </div>
  );
}
