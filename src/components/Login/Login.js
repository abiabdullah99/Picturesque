import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  const [signInWithEmail, user, loading, hookError] =
    useSignInWithEmailAndPassword(auth);

  // Reset Password

  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  // Singing With Google
  const [signInWithGoogle, googleUser, googleloading, googleerror] =
    useSignInWithGoogle(auth);

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
      setErrors({ ...errors, password: "Minimum 6 characters!" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmail(userInfo.email, userInfo.password);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  useEffect(() => {
    if (user || googleUser) {
      navigate(from);
    }
  }, [user, googleUser]);

  useEffect(() => {
    const error = hookError || googleerror;
    if (error) {
      switch (error?.code) {
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
  }, [hookError, googleerror]);

  const restPassword = async () => {
    const email = userInfo.email;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("sent Email");
    } else {
      toast("Please Use Your Valid Email");
    }
  };
  return (
    <div>
      <form className="form-container" onSubmit={handleLogin}>
        <div className="form-info font-mono">
          <h2 className="login-title">Please Login</h2>
          <div>
            <input
              onChange={handleEmailChange}
              name="email"
              type="text"
              placeholder="Enter Your E-mail"
              required
            />
          </div>
          {errors?.email && <p className="error">{errors.email}</p>}
          <div>
            <input
              onChange={handlePassword}
              name="password"
              type="password"
              placeholder="Enter Your Password"
              required
            />
            {errors?.password && <p className="error">{errors.password}</p>}
          </div>
          <button className="login-btn">Login</button>
          <p className="text-white ml-3">
            New To Picturesque?{" "}
            <Link className="text-cyan-400 ml-2 underline" to="/singup">
              Create New Account
            </Link>
          </p>
          {/* {error && <p className="error">{error}</p>} */}
          {/* {hookError && <p className="error">{hookError?.message}</p>} */}
          <ToastContainer />
          <h1 className="text-white text-center">OR</h1>
          <button className="social-btn" onClick={() => signInWithGoogle()}>
            <FcGoogle className="google" /> Google
          </button>
          <button className="sent" onClick={() => restPassword()}>
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
