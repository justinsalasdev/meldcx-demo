import { useState } from "react";

export default function useLogin(setToken) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function resetFields() {
    setEmail("");
    setPassword("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    try {
      setError(null);
      setLoading(true);
      const endPoint = "http://35.201.2.209:8000/login";
      const options = {
        method: "post",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ email, password })
      };

      const res = await fetch(endPoint, options);
      const textData = await res.text();

      if (res.status === 200) {
        localStorage.setItem("token", textData);
        setLoading(false);
        resetFields();
        setToken(textData);
      } else if (res.status === 401) {
        setLoading(false);
        setError(textData);
      } else {
        throw new Error();
      }
    } catch (err) {
      setLoading(false);
      setError("unknown error occured");
    }
  }

  return {
    isLoading,
    email,
    password,
    handleEmailChange: e => setEmail(e.target.value),
    handlePasswordChange: e => setPassword(e.target.value),
    handleSubmit,
    error
  };
}
