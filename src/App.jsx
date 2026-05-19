import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard"; // 🔥 ADD THIS

import cake1 from "./assets/cake1.jpg";
import cake2 from "./assets/cake2.jpg";
import cake3 from "./assets/cake3.jpg";

/* ================= HOME ================= */
function Home() {

  const images = [cake1, cake2, cake3];

  const [index, setIndex] = useState(0);
  const [cart, setCart] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const cakes = [
    { id: 1, name: "Chocolate Cake", price: 1500, img: cake1 },
    { id: 2, name: "Strawberry Cake", price: 1800, img: cake2 },
    { id: 3, name: "Vanilla Cake", price: 1200, img: cake3 }
  ];

  const addToCart = (cake) => {
    setCart([...cart, cake]);
  };

  const removeItem = (id) => {
    setCart(cart.filter((item, index) => index !== id));
  };

  return (
    <div>

      {/* NAVBAR */}
      <nav style={styles.nav}>

        <div style={styles.logo}>
          🍰 CHOCO HEAVEN
        </div>

        <div style={styles.menu}>
          <span>Home</span>
          <span>Products</span>
          <span>About</span>
          <span>Contact</span>
        </div>

        {/* RIGHT SIDE */}
        <div style={styles.icons}>

          <div style={styles.dropdownContainer}>
            <span
              style={styles.icon}
              onClick={() => setShowMenu(!showMenu)}
            >
              👤
            </span>

            {showMenu && (
              <div style={styles.dropdown}>

                <Link to="/login" style={styles.dropdownLink}>
                  Login
                </Link>

                <Link to="/register" style={styles.dropdownLink}>
                  Register
                </Link>

                {/* 🔥 DASHBOARD LINK */}
                <Link to="/dashboard" style={styles.dropdownLink}>
                  Admin
                </Link>

              </div>
            )}
          </div>

          <span
            style={styles.icon}
            onClick={() => setShowCart(!showCart)}
          >
            🛒 ({cart.length})
          </span>

        </div>
      </nav>

      {/* HERO */}
      <div style={styles.hero}>
        <img src={images[index]} style={styles.image} />
        <div style={styles.overlay}>
          <h1>Fresh & Delicious Cakes 🍰</h1>
          <p>Order your favorite cakes online with Choco Heaven</p>
        </div>
      </div>

      {/* PRODUCTS */}
      <h2 style={styles.title}>🍰 Our Cakes</h2>

      <div style={styles.container}>
        {cakes.map((cake) => (
          <div key={cake.id} style={styles.card}>
            <img src={cake.img} style={styles.img} />
            <h3>{cake.name}</h3>
            <p>Rs. {cake.price}</p>

            <button
              style={styles.button}
              onClick={() => addToCart(cake)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* CART */}
      {showCart && (
        <div style={styles.cartBox}>
          <h2>🛒 Cart Items</h2>

          {cart.length === 0 ? (
            <p>No items added</p>
          ) : (
            cart.map((item, id) => (
              <div key={id} style={styles.cartItem}>
                <p>{item.name}</p>
                <p>Rs. {item.price}</p>

                <button
                  style={styles.removeBtn}
                  onClick={() => removeItem(id)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      )}

      {/* FOOTER */}
      <footer style={styles.footer}>
        <h2>🍰 CHOCO HEAVEN</h2>
        <p>Fresh Cakes Delivered With Love ❤️</p>
      </footer>

    </div>
  );
}

/* ================= APP ROUTES ================= */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* 🔥 DASHBOARD ROUTE */}
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

/* ================= STYLES ================= */
const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    background: "white",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  },

  logo: {
    fontSize: "26px",
    fontWeight: "bold",
    color: "#8B0000"
  },

  menu: {
    display: "flex",
    gap: "20px",
    cursor: "pointer"
  },

  icons: {
    display: "flex",
    gap: "20px",
    alignItems: "center"
  },

  icon: {
    fontSize: "24px",
    cursor: "pointer"
  },

  dropdownContainer: {
    position: "relative"
  },

  dropdown: {
    position: "absolute",
    top: "35px",
    right: "0",
    background: "white",
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
    borderRadius: "8px",
    width: "120px",
    display: "flex",
    flexDirection: "column",
    zIndex: "100"
  },

  dropdownLink: {
    padding: "10px",
    textDecoration: "none",
    color: "black",
    borderBottom: "1px solid #eee"
  },

  hero: { position: "relative" },

  image: {
    width: "100%",
    height: "500px",
    objectFit: "cover"
  },

  overlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    textAlign: "center"
  },

  title: {
    textAlign: "center",
    marginTop: "40px"
  },

  container: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "20px"
  },

  card: {
    width: "220px",
    padding: "10px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)"
  },

  img: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "10px"
  },

  button: {
    padding: "10px 15px",
    background: "crimson",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },

  cartBox: {
    width: "350px",
    margin: "40px auto",
    padding: "20px",
    background: "#fff",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    borderRadius: "10px"
  },

  cartItem: {
    borderBottom: "1px solid #ddd",
    padding: "10px 0"
  },

  removeBtn: {
    padding: "5px 10px",
    background: "black",
    color: "white",
    border: "none",
    cursor: "pointer"
  },

  footer: {
    marginTop: "50px",
    background: "#222",
    color: "white",
    textAlign: "center",
    padding: "30px"
  }
};