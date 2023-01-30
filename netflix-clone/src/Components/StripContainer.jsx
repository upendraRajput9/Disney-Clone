import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51MT3SaSJFsGJPILc5LTyuzMsin95zFOlCMhCeaDq2HQNRgvYaRIM1UHEPQBP7N45wPjFDmB7LSqyUomHHKNcEEJ800dIxWCVlr";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
