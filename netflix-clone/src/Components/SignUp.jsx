import React from "react";
import { useRef } from "react";
import { doc, setDoc } from "firebase/firestore";
import db from "../firebase";
import { auth } from "../firebase";

const SignUp = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = async (e) => {
    e.preventDefault();
    let res = await auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    );
    await setDoc(doc(db, "plans", res.user.uid), {
      standard: {
        active: false,
        description: "1080px",
        name: "Standard",
        price: 199,
      },
      basic: { active: false, description: "760px", name: "Basic", price: 499 },
      premium: {
        active: false,
        description: "4k+HDR",
        name: "Premium",
        price: 649,
      },
    });
  };

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      );
    } catch (error) {
      alert("Enter a correct info");
    }
  };

  return (
    <div className="signUp_comp">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          {" "}
          <span style={{ color: "gray" }}>New to Netflix?</span>
          <span onClick={register} className="signUp_link">
            {" "}
            Sign Up now
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUp;
