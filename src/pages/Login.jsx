import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [isRegister, setIsRegister] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegister) {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      const user = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };

      localStorage.setItem(
        "booknookUser",
        JSON.stringify(user)
      );

      alert("Registration successful!");

      setIsRegister(false);

      setFormData({
        name: "",
        email: formData.email,
        password: "",
        confirmPassword: "",
      });

      return;
    }

    const savedUser =
      JSON.parse(
        localStorage.getItem("booknookUser")
      );

    if (!savedUser) {
      alert("No account found. Please register first.");
      return;
    }

    if (
      formData.email !== savedUser.email ||
      formData.password !== savedUser.password
    ) {
      alert("Invalid email or password.");
      return;
    }

    localStorage.setItem(
      "booknookLoggedIn",
      "true"
    );

    window.dispatchEvent(new Event("booknookLogin"));
    
    alert(`Welcome back, ${savedUser.name}!`);

    navigate("/");
  };

  return (
    <main className="login-page">

      <div className="login-container">

        <div className="login-card">

          <div className="login-logo">
            📚
          </div>

          <h1>
            {isRegister
              ? "Create Your Account"
              : "Welcome Back"}
          </h1>

          <p className="login-subtitle">
            {isRegister
              ? "Join BookNook and start exploring books."
              : "Sign in to continue shopping at BookNook."}
          </p>


          <form onSubmit={handleSubmit}>

            {/* Name */}

            {isRegister && (
              <div className="login-form-group">

                <label>
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />

              </div>
            )}


            {/* Email */}

            <div className="login-form-group">

              <label>
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />

            </div>


            {/* Password */}

            <div className="login-form-group">

              <label>
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                minLength="6"
                required
              />

            </div>


            {/* Confirm Password */}

            {isRegister && (
              <div className="login-form-group">

                <label>
                  Confirm Password
                </label>

                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  minLength="6"
                  required
                />

              </div>
            )}


            <button
              type="submit"
              className="login-submit-btn"
            >
              {isRegister
                ? "Create Account"
                : "Login"}
            </button>

          </form>


          {/* Switch Login/Register */}

          <div className="login-switch">

            {isRegister
              ? "Already have an account?"
              : "Don't have an account?"}

            <button
              type="button"
              onClick={() =>
                setIsRegister(!isRegister)
              }
            >
              {isRegister
                ? "Login"
                : "Register"}
            </button>

          </div>


          <Link
            to="/"
            className="login-home-link"
          >
            ← Back to Home
          </Link>

        </div>

      </div>

    </main>
  );
}

export default Login;