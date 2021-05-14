import React from "react";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <section className="login">
      <div className="loginContainer">
        <label>Нэвтрэх нэр</label>
        <input
          type="text"
          autoFocus
          autoComplete="off"
          placeholder="Утасны дугаар/И-мэйл"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <label>Нууц үг</label>
        <input
          type="password"
          autoComplete="off"
          placeholder="Нууц үг"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>Нэвтрэх</button>
              <p>
                Шинэ хэрэглэгч үү ?
                <span onClick={() => setHasAccount(!hasAccount)}>
                  Бүртгүүлэх
                </span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignup}>Бүртгүүлэх</button>
              <p>
                Амжилттай хадаглагдлаа?
                <span onClick={() => setHasAccount(!hasAccount)}>
                  Бүртгүүлэх
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
