import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db, { auth } from "../firebase";
import Navbar from "./Navbar";
import Plans from "./Plans";

const Profile = () => {
  const user = useSelector(selectUser);
  const [currentPlan, setPlan] = useState(null);
  const [renewal, setDate] = useState(null);

  const fetchData = async () => {
    var user = await auth.currentUser;
    const querySnapshot = await getDocs(collection(db, "plans"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      if (user.uid === doc.id) {
        setPlan(doc.data().current_plan);
        setDate(doc.data().renewal_date);
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="profile">
      <Navbar />
      <div className="profile_body">
        <h1>Edit Profile</h1>
        <div className="profile_info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="logo"
          />
          <div className="profile_details">
            <h2>{user.email}</h2>
            <div className="profile_plan">
              <h3>Plans{currentPlan && `(Current Plan:${currentPlan})`}</h3>
              <h4>{renewal && `Renewal date: ${renewal}`}</h4>
              <Plans />
              <button onClick={() => auth.signOut()} className="signOut_btn">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
