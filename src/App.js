import React, { useState, useEffect } from "react";
import fire from "../src/fire";
import Login from "../src/Login";
import Hero from "../src/Hero";
import "./App.css";
import Delgerengui from "./Delgerengui";
import Ajiltan from "./Ajiltan";
import Eelj from "./Eelj";
import Salbar from "./Salbar";
import Tailan from "./Tailan";
import history from "./history";
import { Switch, Route } from "react-router-dom";
const App = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route path="/delgerengui">
          <Delgerengui />
        </Route>

        <Route path="/server">
          <Delgerengui />
        </Route>

        <Route path="/ajiltan">
          <Ajiltan />
        </Route>

        <Route path="/tailan">
          <Tailan />
        </Route>

        <Route path="/eelj">
          <Eelj />
        </Route>

        <Route path="/salbar">
          <Salbar />
        </Route>
        {user ? (
          <Hero handleLogout={handleLogout} />
        ) : (
          <Route path="/">
            <Login
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleLogin={handleLogin}
              handleSignup={handleSignup}
              hasAccount={hasAccount}
              setHasAccount={setHasAccount}
              emailError={emailError}
              passwordError={passwordError}
            />
          </Route>
        )}
      </Switch>
    </div>
  );
};

export default App;
