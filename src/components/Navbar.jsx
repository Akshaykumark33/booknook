import  { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import {
  FaBookOpen,
  FaHeart,
  FaUser,
  FaShoppingBag,
  FaSearch,
  FaBars,
  FaTimes
} from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const [cartCount,setCartCount] = useState(0);
  
  const [search, setSearch] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  const [user, setUser] = useState(null);

    useEffect(() => {
      const checkLoginStatus = () => {
        const savedUser =
          JSON.parse(
            localStorage.getItem("booknookUser")
          );

        const loggedIn =
          localStorage.getItem("booknookLoggedIn");

        if (savedUser && loggedIn === "true") {
          setUser(savedUser);
        } else {
          setUser(null);
        }
      };

      // Check when Navbar loads
      checkLoginStatus();

      // Check immediately after login
      window.addEventListener(
        "booknookLogin",
        checkLoginStatus
      );

      // Cleanup
      return () => {
        window.removeEventListener(
          "booknookLogin",
          checkLoginStatus
        );
      };
    }, []);

  const handleLogout = () => {
    localStorage.removeItem("booknookLoggedIn");

    setUser(null);

    window.dispatchEvent(new Event("booknookLogout"));

    alert("You have been logged out.");
  };

  //calculate count of cart
  const updateCartCount = () => {
    const cart =
      JSON.parse(
        localStorage.getItem("booknookCart")
      ) || [];

    const count = cart.reduce(
      (total, item) =>
        total + (item.quantity || 1),
      0
    );

    setCartCount(count);
  };

  useEffect(() => {
    updateCartCount();

    window.addEventListener(
      "cartUpdated",
      updateCartCount
    );

    return () => {
      window.removeEventListener(
        "cartUpdated",
        updateCartCount
      );
    };
  }, []);

  const searchPlaceholders = [
    "Search for ISBN, Book Name, Author",
    "Search for Best Sellers",
    "Search for Fiction Books",
    "Search for New Arrivals",
    "Search for Children's Books",
    "Search for Stationery"
  ];

  

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) =>
        (prevIndex + 1) % searchPlaceholders.length
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="booknook-header">

      <nav className="booknook-navbar">

        <div className="booknook-nav-container">

          {/* ================= LOGO ================= */}
          <Link to="/" className="booknook-logo">

            <div className="logo-icon">
              <FaBookOpen />
            </div>

            <div className="logo-text">
              <span>BOOK</span>
              <span>NOOK</span>
            </div>

          </Link>


          {/* ================= DESKTOP MENU ================= */}
          <div className="booknook-menu">

            <Link to="/products" className="nav-menu-link">
              Books
            </Link>

            <Link to="/stationery" className="nav-menu-link">
              Stationery
            </Link>

          </div>


          {/* ================= SEARCH ================= */}
            <form
              className="booknook-search"
              onSubmit={(e) => {
                e.preventDefault();

                const searchValue = search.trim();

                if (!searchValue) return;

                const searchPage = location.pathname === "/stationery" ? "/stationery" : "/products";
                  
                navigate(
                    `${searchPage}?search=${encodeURIComponent(searchValue)}`
                  );
                }
              }
            >
                <div className="search-input-wrapper">

                    <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder=""
                    aria-label="Search books"
                    />

                    {/* Animated placeholder */}
                    {!search && (
                    <div
                        key={placeholderIndex}
                        className="animated-placeholder"
                    >
                        {searchPlaceholders[placeholderIndex]}
                    </div>
                    )}

                </div>

                <button type="submit">
                    <FaSearch />
                </button>
            </form>


          {/* ================= RIGHT ICONS ================= */}
          <div className="booknook-actions">

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="nav-action"
              title="Wishlist"
            >
              <FaHeart />
              <span>Wishlist</span>
            </Link>


            {/* Login */}
            {user ? (
              <div className="navbar-user-area">

                <Link to="/profile" className="navbar-user-name">
                  Hi, {user.name}
                </Link>  
                

                <button
                  className="navbar-logout-btn"
                  onClick={handleLogout}
                >
                  Logout
                </button>

              </div>
            ) : (
            
            <Link
              to="/login"
              className="nav-action"
              title="Login"
            >
              <FaUser />
              <span>Login</span>
            </Link>
            )}

            {/* Cart */}
            <Link
              to="/cart"
              className="cart-link"
              title="Shopping Cart"
            >
              <FaShoppingBag />

              {cartCount >0 && (
                <span className="cart-count">
                 {cartCount}
              </span>
              )}
            </Link>

          </div>


          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>


        {/* ================= MOBILE MENU ================= */}
        {menuOpen && (

          <div className="mobile-menu">

            <Link
              to="/products"
              onClick={() => setMenuOpen(false)}
            >
              📚 Books
            </Link>

            <Link
              to="/stationery"
              onClick={() => setMenuOpen(false)}
            >
              ✏️ Stationery
            </Link>

           

          </div>

        )}

      </nav>

    </header>
  );
}

export default Navbar;