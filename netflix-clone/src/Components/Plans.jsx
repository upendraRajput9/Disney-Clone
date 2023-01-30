import React, { useState } from "react";
import { useEffect } from "react";
import db, { auth } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Plans = () => {
  const [plans, setPlans] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    var user = await auth.currentUser;
    const querySnapshot = await getDocs(collection(db, "plans"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      if (user.uid === doc.id) {
        setPlans(Object.entries(doc.data()).flat());
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="plans">
      {plans.map((plan) => {
        if (plan.price) {
          return (
            <div className="plan" key={plan.price}>
              <div className="plan_info">
                <h5>{plan.name}</h5>
                <h6>{plan.description}</h6>
              </div>
              <button
                className={plan.active && "cur_pack"}
                onClick={() => navigate("/pay", { state: plan })}
              >
                {plan.active ? "Current Package" : "Subscribe"}
              </button>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Plans;
