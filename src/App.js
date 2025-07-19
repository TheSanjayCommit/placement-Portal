// // // // // // // // src/App.js
// // // // // // // import React from "react";
// // // // // // // import Login from "./Login";

// // // // // // // function App() {
// // // // // // //   return (
// // // // // // //     <div>
// // // // // // //       <Login />
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default App;











// // // // // // import React from "react";
// // // // // // import JobList from "./components/JobList";

// // // // // // function App() {
// // // // // //   return (
// // // // // //     <div>
// // // // // //       <h1>🎓 Placement Portal</h1>
// // // // // //       <JobList />
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default App;
































// // // // // import React, { useEffect, useState } from "react";
// // // // // import JobList from "./components/JobList";
// // // // // import { auth, isSignInWithEmailLink, signInWithEmailLink } from "./firebase";

// // // // // function App() {
// // // // //   const [user, setUser] = useState(null);
// // // // //   const [email, setEmail] = useState("");
// // // // //   const [checkingAuth, setCheckingAuth] = useState(true); // ✅ added

// // // // //   useEffect(() => {
// // // // //     const storedEmail = window.localStorage.getItem("emailForSignIn");

// // // // //     const trySignInWithLink = async () => {
// // // // //       if (isSignInWithEmailLink(auth, window.location.href) && storedEmail) {
// // // // //         try {
// // // // //           const result = await signInWithEmailLink(auth, storedEmail, window.location.href);
// // // // //           setUser(result.user);
// // // // //           window.localStorage.removeItem("emailForSignIn");
// // // // //         } catch (err) {
// // // // //           console.error("Sign-in error", err);
// // // // //         }
// // // // //       }
// // // // //     };

// // // // //     trySignInWithLink();

// // // // //     const unsubscribe = auth.onAuthStateChanged((user) => {
// // // // //       setUser(user);
// // // // //       setCheckingAuth(false); // ✅ mark auth check complete
// // // // //     });

// // // // //     return () => unsubscribe();
// // // // //   }, []);

// // // // //   const handleLogin = async () => {
// // // // //     if (!email) return alert("Enter your email");
// // // // //     const actionCodeSettings = {
// // // // //       url: window.location.href,
// // // // //       handleCodeInApp: true,
// // // // //     };

// // // // //     try {
// // // // //       await auth.sendSignInLinkToEmail(email, actionCodeSettings);
// // // // //       window.localStorage.setItem("emailForSignIn", email);
// // // // //       alert("✅ OTP link sent! Check your inbox.");
// // // // //     } catch (err) {
// // // // //       console.error("Failed to send OTP email:", err);
// // // // //       alert("Failed to send OTP email.");
// // // // //     }
// // // // //   };

// // // // //   if (checkingAuth) {
// // // // //     return <p>⏳ Checking authentication...</p>;
// // // // //   }

// // // // //   return (
// // // // //     <div style={{ padding: "2rem" }}>
// // // // //       <h1>🎓 Placement Portal</h1>
// // // // //       {!user ? (
// // // // //         <>
// // // // //           <input
// // // // //             type="email"
// // // // //             value={email}
// // // // //             placeholder="Enter college email"
// // // // //             onChange={(e) => setEmail(e.target.value)}
// // // // //           />
// // // // //           <button onClick={handleLogin}>Sign In with Email Link</button>
// // // // //         </>
// // // // //       ) : (
// // // // //         <>
// // // // //           <p>✅ Logged in as {user.email}</p>
// // // // //           <JobList />
// // // // //         </>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default App;































// // // // // import React, { useEffect, useState } from "react";
// // // // // import JobList from "./components/JobList";
// // // // // import {
// // // // //   auth,
// // // // //   isSignInWithEmailLink,
// // // // //   sendSignInLinkToEmail,
// // // // //   signInWithEmailLink,
// // // // // } from "./firebase";

// // // // // function App() {
// // // // //   const [user, setUser] = useState(null);
// // // // //   const [email, setEmail] = useState("");
// // // // //   const [checkingAuth, setCheckingAuth] = useState(true);

// // // // //   useEffect(() => {
// // // // //     // Handle auto-login from OTP email
// // // // //     const storedEmail = window.localStorage.getItem("emailForSignIn");

// // // // //     if (isSignInWithEmailLink(auth, window.location.href) && storedEmail) {
// // // // //       signInWithEmailLink(auth, storedEmail, window.location.href)
// // // // //         .then((result) => {
// // // // //           setUser(result.user);
// // // // //           window.localStorage.removeItem("emailForSignIn");
// // // // //         })
// // // // //         .catch((error) => {
// // // // //           console.error("Sign-in error", error);
// // // // //         });
// // // // //     }

// // // // //     const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
// // // // //       setUser(firebaseUser);
// // // // //       setCheckingAuth(false);
// // // // //     });

// // // // //     return () => unsubscribe();
// // // // //   }, []);

// // // // //   const handleLogin = async () => {
// // // // //     if (!email) return alert("Enter your college email");

// // // // //     const actionCodeSettings = {
// // // // //       url: window.location.href,
// // // // //       handleCodeInApp: true,
// // // // //     };

// // // // //     try {
// // // // //       await sendSignInLinkToEmail(auth, email, actionCodeSettings);
// // // // //       window.localStorage.setItem("emailForSignIn", email);
// // // // //       alert("📩 Check your email for the login link!");
// // // // //     } catch (error) {
// // // // //       console.error("Failed to send email:", error);
// // // // //       alert("❌ Failed to send OTP. Check if email is correct and allowed.");
// // // // //     }
// // // // //   };

// // // // //   const handleLogout = () => {
// // // // //     auth.signOut();
// // // // //     setUser(null);
// // // // //   };

// // // // //   if (checkingAuth) return <p>⏳ Loading...</p>;

// // // // //   return (
// // // // //     <div style={{ padding: "2rem" }}>
// // // // //       <h1>🎓 Placement Portal</h1>

// // // // //       {!user ? (
// // // // //         <>
// // // // //           <input
// // // // //             type="email"
// // // // //             placeholder="Enter your college email"
// // // // //             value={email}
// // // // //             onChange={(e) => setEmail(e.target.value)}
// // // // //           />
// // // // //           <button onClick={handleLogin}>Send OTP Login Link</button>
// // // // //         </>
// // // // //       ) : (
// // // // //         <>
// // // // //           <p>✅ Welcome, {user.email}</p>
// // // // //           <button onClick={handleLogout}>Logout</button>
// // // // //           <JobList />
// // // // //         </>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default App;
































// // // // import React, { useEffect, useState } from "react";
// // // // import JobList from "./components/JobList";
// // // // import {
// // // //   auth,
// // // //   isSignInWithEmailLink,
// // // //   sendSignInLinkToEmail,
// // // //   signInWithEmailLink,
// // // // } from "./firebase";

// // // // function App() {
// // // //   const [user, setUser] = useState(null);
// // // //   const [email, setEmail] = useState("");
// // // //   const [checkingAuth, setCheckingAuth] = useState(true);

// // // //   useEffect(() => {
// // // //     const storedEmail = window.localStorage.getItem("emailForSignIn");

// // // //     if (isSignInWithEmailLink(auth, window.location.href) && storedEmail) {
// // // //       signInWithEmailLink(auth, storedEmail, window.location.href)
// // // //         .then((result) => {
// // // //           setUser(result.user);
// // // //           window.localStorage.removeItem("emailForSignIn");
// // // //         })
// // // //         .catch((error) => {
// // // //           console.error("Sign-in error", error);
// // // //         });
// // // //     }

// // // //     const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
// // // //       setUser(firebaseUser);
// // // //       setCheckingAuth(false);
// // // //     });

// // // //     return () => unsubscribe();
// // // //   }, []);

// // // //   const handleLogin = async () => {
// // // //     if (!email) return alert("Enter your college email");

// // // //     if (!email.endsWith("@chaitanya.edu.in")) {
// // // //       alert("❌ Only Chaitanya College emails allowed!");
// // // //       return;
// // // //     }

// // // //     const actionCodeSettings = {
// // // //       url: window.location.href,
// // // //       handleCodeInApp: true,
// // // //     };

// // // //     try {
// // // //       await sendSignInLinkToEmail(auth, email, actionCodeSettings);
// // // //       window.localStorage.setItem("emailForSignIn", email);
// // // //       alert("📩 OTP sent! Check your inbox.");
// // // //     } catch (error) {
// // // //       console.error("Failed to send email:", error);
// // // //       alert("❌ Failed to send OTP. Check if email is correct and allowed.");
// // // //     }
// // // //   };

// // // //   const handleLogout = () => {
// // // //     auth.signOut();
// // // //     setUser(null);
// // // //   };

// // // //   if (checkingAuth) return <p>⏳ Loading...</p>;

// // // //   return (
// // // //     <div style={{ padding: "2rem" }}>
// // // //       <h1>🎓 Placement Portal</h1>

// // // //       {!user ? (
// // // //         <>
// // // //           <input
// // // //             type="email"
// // // //             placeholder="Enter your college email"
// // // //             value={email}
// // // //             onChange={(e) => setEmail(e.target.value)}
// // // //           />
// // // //           <button onClick={handleLogin}>Send OTP Login Link</button>
// // // //         </>
// // // //       ) : (
// // // //         <>
// // // //           <p>✅ Logged in as: <strong>{user.email}</strong></p>
// // // //           <button onClick={handleLogout}>Logout</button>
// // // //           <JobList />
// // // //         </>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }

// // // // export default App;




































// // // import React, { useEffect, useState } from "react";
// // // import JobList from "./components/JobList";
// // // import {
// // //   auth,
// // //   isSignInWithEmailLink,
// // //   sendSignInLinkToEmail,
// // //   signInWithEmailLink,
// // // } from "./firebase";

// // // function App() {
// // //   const [user, setUser] = useState(null);
// // //   const [email, setEmail] = useState("");
// // //   const [checkingAuth, setCheckingAuth] = useState(true);

// // //   useEffect(() => {
// // //     const storedEmail = window.localStorage.getItem("emailForSignIn");

// // //     if (isSignInWithEmailLink(auth, window.location.href) && storedEmail) {
// // //       signInWithEmailLink(auth, storedEmail, window.location.href)
// // //         .then((result) => {
// // //           setUser(result.user);
// // //           window.localStorage.removeItem("emailForSignIn");
// // //         })
// // //         .catch((error) => {
// // //           console.error("Sign-in error", error);
// // //         });
// // //     }

// // //     const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
// // //       setUser(firebaseUser);
// // //       setCheckingAuth(false);
// // //     });

// // //     return () => unsubscribe();
// // //   }, []);

// // //   const handleLogin = async () => {
// // //     if (!email) return alert("Please enter a valid email address");

// // //     const actionCodeSettings = {
// // //       url: "https://placement-portal0.web.app", // ✅ Make sure this is your deployed domain
// // //       handleCodeInApp: true,
// // //     };

// // //     try {
// // //       await sendSignInLinkToEmail(auth, email, actionCodeSettings);
// // //       window.localStorage.setItem("emailForSignIn", email);
// // //       alert("📩 Check your inbox for the OTP login link!");
// // //     } catch (error) {
// // //       console.error("Failed to send email:", error);
// // //       alert("❌ Failed to send OTP. Check if email is valid and allowed.");
// // //     }
// // //   };

// // //   const handleLogout = () => {
// // //     auth.signOut();
// // //     setUser(null);
// // //   };

// // //   if (checkingAuth) return <p>⏳ Loading...</p>;

// // //   return (
// // //     <div style={{ padding: "2rem" }}>
// // //       <h1>🎓 Placement Portal</h1>

// // //       {!user ? (
// // //         <>
// // //           <input
// // //             type="email"
// // //             placeholder="Enter your email"
// // //             value={email}
// // //             onChange={(e) => setEmail(e.target.value)}
// // //           />
// // //           <button onClick={handleLogin}>Send OTP Login Link</button>
// // //         </>
// // //       ) : (
// // //         <>
// // //           <p>✅ Welcome, {user.email}</p>
// // //           <button onClick={handleLogout}>Logout</button>
// // //           <JobList />
// // //         </>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // export default App;






































// // import React, { useEffect, useState } from "react";
// // import JobList from "./components/JobList";
// // import {
// //   auth,
// //   isSignInWithEmailLink,
// //   sendSignInLinkToEmail,
// //   signInWithEmailLink,
// // } from "./firebase";

// // function App() {
// //   const [user, setUser] = useState(null);
// //   const [email, setEmail] = useState("");
// //   const [checkingAuth, setCheckingAuth] = useState(true);

// //   useEffect(() => {
// //     const storedEmail = window.localStorage.getItem("emailForSignIn");

// //     if (isSignInWithEmailLink(auth, window.location.href) && storedEmail) {
// //       signInWithEmailLink(auth, storedEmail, window.location.href)
// //         .then((result) => {
// //           setUser(result.user);
// //           window.localStorage.removeItem("emailForSignIn");
// //         })
// //         .catch((error) => {
// //           console.error("❌ Sign-in error:", error);
// //         });
// //     }

// //     const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
// //       setUser(firebaseUser);
// //       setCheckingAuth(false);
// //     });

// //     return () => unsubscribe();
// //   }, []);

// //   const handleLogin = async () => {
// //     if (!email) return alert("Please enter a valid email address");

// //     const actionCodeSettings = {
// //       url: "https://placement-portal0.web.app", // ✅ Hosted domain ONLY
// //       handleCodeInApp: true,
// //     };

// //     try {
// //       await sendSignInLinkToEmail(auth, email, actionCodeSettings);
// //       window.localStorage.setItem("emailForSignIn", email);
// //       alert("📩 Check your inbox for the login link!");
// //     } catch (error) {
// //       console.error("❌ Failed to send OTP:", error);
// //       alert("❌ Failed to send OTP. Please check your email and domain settings.");
// //     }
// //   };

// //   const handleLogout = () => {
// //     auth.signOut();
// //     setUser(null);
// //   };

// //   if (checkingAuth) return <p>⏳ Loading...</p>;

// //   return (
// //     <div style={{ padding: "2rem", fontFamily: "Arial" }}>
// //       <h1>🎓 Placement Portal</h1>

// //       {!user ? (
// //         <>
// //           <input
// //             type="email"
// //             placeholder="Enter your email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             style={{ padding: "8px", marginRight: "8px" }}
// //           />
// //           <button onClick={handleLogin}>Send OTP Login Link</button>
// //         </>
// //       ) : (
// //         <>
// //           <p>✅ Logged in as: {user.email}</p>
// //           <button onClick={handleLogout} style={{ marginBottom: "1rem" }}>
// //             Logout
// //           </button>
// //           <JobList />
// //         </>
// //       )}
// //     </div>
// //   );
// // }

// // export default App;








































// import React, { useEffect, useState } from "react";
// import JobList from "./components/JobList";
// import {
//   auth,
//   isSignInWithEmailLink,
//   sendSignInLinkToEmail,
//   signInWithEmailLink,
// } from "./firebase";

// function App() {
//   const [user, setUser] = useState(null);
//   const [email, setEmail] = useState("");
//   const [checkingAuth, setCheckingAuth] = useState(true);

//   // Set correct redirect URL based on env
//   const redirectUrl =
//     window.location.hostname === "localhost"
//       ? "http://localhost:3000"
//       : "https://placement-portal0.web.app";

//   useEffect(() => {
//     const storedEmail = window.localStorage.getItem("emailForSignIn");

//     if (isSignInWithEmailLink(auth, window.location.href) && storedEmail) {
//       signInWithEmailLink(auth, storedEmail, window.location.href)
//         .then((result) => {
//           setUser(result.user);
//           window.localStorage.removeItem("emailForSignIn");
//         })
//         .catch((error) => {
//           console.error("Sign-in error", error);
//         });
//     }

//     const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
//       setUser(firebaseUser);
//       setCheckingAuth(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   const handleLogin = async () => {
//     if (!email || !email.includes("@")) {
//       alert("❌ Enter a valid email");
//       return;
//     }

//     const actionCodeSettings = {
//       url: redirectUrl,
//       handleCodeInApp: true,
//     };

//     try {
//       await sendSignInLinkToEmail(auth, email, actionCodeSettings);
//       window.localStorage.setItem("emailForSignIn", email);
//       alert("📩 OTP Login link sent! Check your inbox.");
//     } catch (error) {
//       console.error("❌ Failed to send OTP:", error);
//       alert("❌ Failed to send OTP. Check your domain settings or email.");
//     }
//   };

//   const handleLogout = () => {
//     auth.signOut();
//     setUser(null);
//   };

//   if (checkingAuth) return <p>⏳ Checking authentication...</p>;

//   return (
//     <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
//       <h1>🎓 Placement Portal</h1>

//       {!user ? (
//         <>
//           <input
//             type="email"
//             placeholder="Enter your college email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             style={{
//               padding: "0.5rem",
//               marginRight: "0.5rem",
//               borderRadius: "5px",
//               border: "1px solid #ccc",
//               width: "250px",
//             }}
//           />
//           <button onClick={handleLogin}>Send OTP Login Link</button>
//         </>
//       ) : (
//         <>
//           <p>✅ Welcome, {user.email}</p>
//           <button onClick={handleLogout} style={{ marginBottom: "1rem" }}>
//             Logout
//           </button>
//           <JobList />
//         </>
//       )}
//     </div>
//   );
// }

// export default App;



































// src/App.js
import React, { useEffect, useState } from "react";
import JobList from "./components/JobList";
import { auth, googleProvider, signInWithPopup, signOut } from "./firebase";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error("Login failed", err);
      alert("❌ Login failed. Try again.");
    }
  };

  const handleLogout = () => {
    signOut(auth);
    setUser(null);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🎓 Placement Portal</h1>
      {!user ? (
        <>
          <button onClick={handleGoogleLogin}>🔐 Sign in with Google</button>
        </>
      ) : (
        <>
          <p>✅ Welcome, {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
          <JobList />
        </>
      )}
    </div>
  );
}

export default App;
