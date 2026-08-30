import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const savedUser =
      JSON.parse(localStorage.getItem("booknookUser"));

    const loggedIn =
      localStorage.getItem("booknookLoggedIn");

    if (!savedUser || loggedIn !== "true") {
      navigate("/login");
      return;
    }

    setUser(savedUser);

    const savedOrders =
        JSON.parse(
            localStorage.getItem("booknookOrders")
        ) || [];

        setOrder(savedOrders[0] || null);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("booknookLoggedIn");

    window.dispatchEvent(
      new Event("booknookLogout")
    );

    alert("You have been logged out.");

    navigate("/");
  };

  if (!user) {
    return null;
  }

  return (
    <main className="profile-page">

      {/* ================= HEADER ================= */}

      <section className="profile-header">

        <div className="container">

          <span>BOOKNOOK</span>

          <h1>My Account</h1>

          <p>
            Manage your profile, orders and saved information.
          </p>

        </div>

      </section>


      {/* ================= ACCOUNT ================= */}

      <section className="profile-section">

        <div className="container">

          <div className="row g-4">

            {/* ================= PROFILE CARD ================= */}

            <div className="col-lg-4">

              <div className="profile-card">

                <div className="profile-avatar">
                  {user.name
                    ? user.name.charAt(0).toUpperCase()
                    : "U"}
                </div>

                <h2>
                  {user.name}
                </h2>

                <p>
                  {user.email}
                </p>

                <div className="profile-member">
                  BookNook Member
                </div>

                <button
                  className="profile-logout-btn"
                  onClick={handleLogout}
                >
                  Logout
                </button>

              </div>


              {/* Account Navigation */}

              <div className="account-menu">

                <Link to="/profile">
                  👤 Profile
                </Link>

                <Link to="/orders">
                  📦 Order History
                </Link>

                <Link to="/wishlist">
                  ❤️ Wishlist
                </Link>

              </div>

            </div>


            {/* ================= ACCOUNT DETAILS ================= */}

            <div className="col-lg-8">

              {/* Personal Information */}

              <div className="account-content-card">

                <div className="account-card-title">

                  <h2>
                    Personal Information
                  </h2>

                </div>

                <div className="account-info-grid">

                  <div>
                    <span>Full Name</span>
                    <strong>{user.name}</strong>
                  </div>

                  <div>
                    <span>Email Address</span>
                    <strong>{user.email}</strong>
                  </div>

                </div>

              </div>


              {/* ================= SAVED ADDRESS ================= */}

              <div className="account-content-card">

                <div className="account-card-title">

                  <h2>
                    📍 Saved Address
                  </h2>

                </div>

                {order?.customer ? (

                  <div className="saved-address">

                    <strong>
                      {order.customer.fullName}
                    </strong>

                    <p>
                      {order.customer.address}
                    </p>

                    <p>
                      {order.customer.city},{" "}
                      {order.customer.state} -{" "}
                      {order.customer.pincode}
                    </p>

                    <p>
                      Phone: {order.customer.phone}
                    </p>

                  </div>

                ) : (

                  <div className="no-address">

                    <p>
                      No saved address available.
                    </p>

                    <Link to="/products">
                      Start Shopping
                    </Link>

                  </div>

                )}

              </div>


              {/* ================= RECENT ORDER ================= */}

              <div className="account-content-card">

                <div className="account-card-title">

                  <h2>
                    📦 Recent Order
                  </h2>

                  <Link to="/orders">
                    View All
                  </Link>

                </div>

                {order ? (

                  <div className="recent-order">

                    <div>
                      <span>Order ID</span>
                      <strong>
                        {order.orderId}
                      </strong>
                    </div>

                    <div>
                      <span>Order Date</span>
                      <strong>
                        {order.orderDate}
                      </strong>
                    </div>

                    <div>
                      <span>Status</span>
                      <strong className="order-status">
                        {order.status}
                      </strong>
                    </div>

                    <div>
                      <span>Total</span>
                      <strong>
                        ₹
                        {order.total.toLocaleString(
                          "en-IN"
                        )}
                      </strong>
                    </div>

                  </div>

                ) : (

                  <div className="no-order">

                    <p>
                      You haven't placed any orders yet.
                    </p>

                    <Link to="/products">
                      Explore Books
                    </Link>

                  </div>

                )}

              </div>


              {/* ================= QUICK LINKS ================= */}

              <div className="quick-account-links">

                <Link to="/products">
                  📚 Continue Shopping
                </Link>

                <Link to="/wishlist">
                  ❤️ My Wishlist
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Profile;