import { useEffect, useState } from "react";

const MyForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Emailfeld darf nicht leer sein!");
  const [passwordError, setPasswordError] = useState("Passwortfeld darf nicht leer sein!");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Bitte geben Sie eine korrekte Email ein.");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e) => {
    setPasswordError(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError("Passwortlänge soll zwischen 3 und 8 Symbolen sein");
      if (!e.target.value) {
        setPasswordError("Passwort darf nicht leer sein");
      }
    } else {
      setPasswordError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  return (
    <div
      className="form"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: 400,
        }}
      >
        <h1>Registration</h1>
        <input
          style={{
            marginTop: 20,
            padding: "10px 20px",
            border: "1px solid blue",
            borderRadius: 5,
          }}
          onBlur={(e) => blurHandler(e)}
          value={email}
          onChange={(e) => emailHandler(e)}
          name="email"
          type="text"
          placeholder="Enter your email..."
        />
        {emailDirty && emailError && (
          <p
            style={{
              color: "red",
            }}
          >
            {emailError}
          </p>
        )}

        <input
          style={{
            padding: "10px 20px",
            marginTop: 20,
            border: "1px solid blue",
            borderRadius: 5,
          }}
          onBlur={(e) => blurHandler(e)}
          onChange={(e) => passwordHandler(e)}
          name="password"
          type="password"
          placeholder="Enter your password..."
        />
        {passwordDirty && passwordError && (
          <p
            style={{
              color: "red",
            }}
          >
            {passwordError}
          </p>
        )}
        <button
          disabled={!formValid}
          style={{
            padding: "10px 20px",
            marginTop: 20,
            background: "lightblue",
            color: "grey",
            border: "none",
            borderRadius: 5,
            textTransform: "uppercase",
            fontSize: 24,
          }}
          type="submit"
        >
          Regisration
        </button>
      </form>
    </div>
  );
};

export default MyForm;
