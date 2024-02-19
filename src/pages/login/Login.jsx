import React, { useEffect } from "react";
import { useState } from "react";
import imglogin from "../../assets/Image.png";
import Logo from "../../assets/Logo.png";

import "./login.css";
import validation from "./validation";
import UsePasswordToggle from "./UsePasswordToggle";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  useEffect(() => {
    let checkLoginStatus = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/users/showMe",
          { withCredentials: true }
        );
        let data = await response.data;
        let user = data.user;
        console.log(user);
        if (user) {
          if (user.role === "admin") {
            window.location.href = "/admin";
          }
          if (user.role === "user") {
            window.location.href = "/user";
          }
        }
      } catch (error) {
        console.log(error?.response?.data?.msg);
      }
    };
    checkLoginStatus();
  }, []);
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });
  let enableSubmit = true;
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (enableSubmit) {
      enableSubmit = false;
      let validate = validation(creds);
      setErrors(validate);
      if (!validate.email && !validate.password) {
        let body = {
          email: creds.email,
          password: creds.password,
        };
        try {
          const response = await axios.post(
            "http://localhost:5000/api/v1/auth/login",
            body,
            { withCredentials: true }
          );
          let data = await response.data;
          setServerErr({ msg: "" });
          let user = data?.user;
          if (user.email === creds.email && user._id) {
            switch (user.role) {
              case "admin":
                window.location.href = "./admin";
                break;

              case "user":
                window.location.href = "./user";
                break;
              default:
                break;
            }
          }
        } catch (error) {
          if (Math.floor(Number(error?.response?.status) / 100) === 4) {
            setServerErr(error.response.data);
            toast.error("" + error.response.data?.msg, {
              autoClose: 2000,
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          } else {
            console.log(error);
          }
        } finally {
          enableSubmit = true;
        }
      }
    }
  };
  let [serverErr, setServerErr] = useState({ msg: "" });
  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    setCreds({
      ...creds,
      [event.target.name]: event.target.value,
    });
  };

  const [PasswordInputtype, ToggleIcon] = UsePasswordToggle();

  return (
    <section className="login">
      <div className="login__wrapper">
        <div className="col_1 col">
          <img src={imglogin} alt="" className="login__img" />
          <p className="hhs">Welcome</p>
          <p className="hhs_2">
            Hammoud bou3lam innova w l3lam
          </p>
        </div>
        <div className="col_2 col">
          <img src={Logo} alt="" className="logo" />
          <div className="form_">
            <h2>Welcome back</h2>
            <h4>Welcome back! Please enter your details.</h4>
            <form action="" id="form" className="flex flex-col ">
              <div className="input_box">
                <label className="email">Email or phone number</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                  value={creds.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div className="input_box">
                <label className="password">
                  <p> password </p>
                  <p className="hide_">
                    <span className="hide">{ToggleIcon}</span>
                    Hide
                  </p>
                </label>
                <input
                  name="password"
                  type={PasswordInputtype}
                  placeholder="Enter your password"
                  required
                  value={creds.password}
                  onChange={handleChange}
                />
                {errors.password && <p className="error">{errors.password}</p>}
              </div>
              <div className="remember">
                <label id="check">
                  <input type="checkbox" name="check" />
                  Remember me
                </label>
                <a href="#">Forgot Password? </a>
              </div>
              <div id="btnNerr">
                <button className="btn" type="submit" onClick={handleSubmit}>
                  Sign in
                </button>
                <div id="authErrors">{serverErr.msg}</div>
              </div>
            </form>
            <p className="learn">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <a href="#"> Learn more.</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
