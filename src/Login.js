import React, { useState, useEffect } from "react";
import {
  auth,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "./firebase";

const actionCodeSettings = {
  // IMPORTANT: use your local dev URL now; replace with production URL after deploy
  url: "http://localhost:3000/",
  handleCodeInApp: true,
};

export default function Login() {
  const [email, setEmail] = useState("");

  // Handle return from email link
  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      const savedEmail = window.localStorage.getItem("emailForSignIn");
      const emailToUse = savedEmail || window.prompt("Confirm your email to sign in");
      signInWithEmailLink(auth, emailToUse, window.location.href)
        .then(() => {
          window.localStorage.removeItem("emailForSignIn");
          alert("Login successful!");
        })
        .catch((err) => {
          console.error(err);
          alert("Login failed.");
        });
    }
  }, []);

  const handleSendLink = async () => {
    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem("emailForSignIn", email);
      alert("Sign-in link sent. Check your inbox!");
    } catch (err) {
      console.error("Error sending sign-in link:", err);
      alert(err.message);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login via Email OTP</h2>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSendLink}>Send OTP Link</button>
    </div>
  );
}
