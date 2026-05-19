import { Link } from "react-router-dom";

import cake from "../assets/images.jpg";

export default function Login() {

  return (

    <div style={styles.container}>

      {/* LEFT IMAGE SECTION */}
      <div style={styles.left}>

        <img
          src={cake}
          alt="cake"
          style={styles.image}
        />

      </div>

      {/* RIGHT LOGIN SECTION */}
      <div style={styles.right}>

        <div style={styles.formBox}>

          <h1 style={styles.logo}>
            Taste of Heaven
          </h1>

          <p style={styles.subtitle}>
            Login to continue your sweet journey 🍰
          </p>

          <input
            type="email"
            placeholder="Email Address*"
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Password*"
            style={styles.input}
          />

          {/* REMEMBER */}
          <div style={styles.options}>

            <div style={styles.checkBox}>
              <input type="checkbox" />
              <span>Remember Me</span>
            </div>

            <span style={styles.forgot}>
              Forgot Password?
            </span>

          </div>

          {/* BUTTON */}
          <button style={styles.button}>
            Login
          </button>

          {/* REGISTER LINK */}
          <p style={styles.registerText}>

            Don’t have an account?

            <Link to="/register" style={styles.link}>
              {" "}Register
            </Link>

          </p>

        </div>

      </div>

    </div>

  );

}

/* ================= STYLES ================= */

const styles = {

  container: {
    display: "flex",
    height: "100vh",
    background: "#f5f5f5"
  },

  left: {
    width: "45%"
  },

  image: {
    width: "100%",
    height: "100vh",
    objectFit: "cover"
  },

  right: {
    width: "55%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#fafafa"
  },

  formBox: {
    width: "360px",
    background: "white",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.08)"
  },

  logo: {
    textAlign: "center",
    color: "#8B0000",
    marginBottom: "10px",
    fontSize: "34px",
    fontWeight: "bold",
    fontFamily: "cursive"
  },

  subtitle: {
    textAlign: "center",
    color: "#777",
    marginBottom: "25px",
    fontSize: "14px"
  },

  input: {
    width: "100%",
    padding: "13px",
    marginBottom: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    outline: "none",
    fontSize: "14px",
    boxSizing: "border-box"
  },

  options: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    fontSize: "13px",
    color: "#555"
  },

  checkBox: {
    display: "flex",
    alignItems: "center",
    gap: "6px"
  },

  forgot: {
    cursor: "pointer",
    color: "#8B0000"
  },

  button: {
    width: "100%",
    padding: "13px",
    background: "#8B0000",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: "bold",
    cursor: "pointer"
  },

  registerText: {
    textAlign: "center",
    marginTop: "20px",
    color: "#666",
    fontSize: "14px"
  },

  link: {
    textDecoration: "none",
    color: "#8B0000",
    fontWeight: "bold"
  }

};