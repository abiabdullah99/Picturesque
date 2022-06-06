import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init";

const Cheakbox = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error] = useState("");
  const navigate = useNavigate();

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };

  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };

  const handlePhoneBlur = (event) => {
    setPhone(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
    const shipping = { name, email, address, phone };
    if (shipping) {
      navigate("/thank");
    }
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleCreateUser}>
        <div className="form-info">
          <h2 className="login-title">Your Shipping Info</h2>

          <div className="input-group">
            <input
              onBlur={handleNameBlur}
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="input-group">
            <input
              value={user?.email}
              readOnly
              type="email"
              name="email"
              required
            />
          </div>
          <div className="input-group">
            <input
              onBlur={handleAddressBlur}
              type="text"
              name="address"
              id=""
              placeholder="Your Address"
              required
            />
          </div>
          <div className="input-group">
            <input
              onBlur={handlePhoneBlur}
              type="text"
              name="phone"
              id=""
              placeholder="Phone"
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <button className="login-btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Cheakbox;
