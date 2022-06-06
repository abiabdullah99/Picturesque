import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Singup = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  const [createUserWithEmailAndPassword, user, loading, hookError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const handleEmailChange = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);

    // error handling

    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "Invalid email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };

  const handlePassword = (e) => {
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(e.target.value);

    // error handling

    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "minimum 6 digit" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const handleConfirmPasswordchange = (e) => {
    if (e.target.value === userInfo.password) {
      setUserInfo({ ...userInfo, confirmPassword: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Password Don't Match" });
      setUserInfo({ ...userInfo, confirmPassword: "" });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
  };

  useEffect(() => {
    if (hookError) {
      switch (hookError?.code) {
        case "auth/invalid-email":
          toast("Invalid email provided, please provide a valid email");
          break;

        case "auth/invalid-password":
          toast("Wrong password. Intruder!!");
          break;
        default:
          toast("something went wrong");
      }
    }
  }, [hookError]);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);

  const [showPass, setShowPass] = useState(false);

  return (
    <div>
      <form className="form-container" onSubmit={handleLogin}>
        <div className="form-info">
          <h2 className="login-title font-mono">Please Register</h2>
          <div>
            <input
              onChange={handleEmailChange}
              type="text"
              placeholder="Enter Your E-mail"
              required
            />
            {errors?.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="pass">
            <input
              onChange={handlePassword}
              type={showPass ? "text" : "password"}
              placeholder="Enter Your Password"
              required
            />
            {errors?.password && <p className="error">{errors.password}</p>}
            <p className="show-pass" onClick={() => setShowPass(!showPass)}>
              🔥
            </p>
          </div>
          <div>
            <input
              onChange={handleConfirmPasswordchange}
              name="confirm-pass"
              type="password"
              placeholder="Confrim Password"
              required
            />
          </div>
          <button className="login-btn">Sing Up</button>
          <p className="text-white ml-3">
            Already have an account? 
            <Link className="text-cyan-400 ml-2 underline" to="/login">
               Login Here
            </Link>
          </p>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};

export default Singup;
