import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Orders() {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const loggedIn =
      localStorage.getItem("booknookLoggedIn");

    if (loggedIn !== "true") {
      navigate("/login");
      return;
    }

    const savedOrders =
      JSON.parse(
        localStorage.getItem("booknookOrders")
      ) || [];

    setOrders(savedOrders);
  }, [navigate]);

  if (orders.length === 0) {
    return (
      <main className="orders-page">

        <section className="orders-header">
          <div className="container">
            <span>BOOKNOOK</span>

            <h1>My Orders</h1>

            <p>
              Track and review your BookNook purchases.
            </p>
          </div>
        </section>

        <div className="container">

          <div className="empty-orders">

            <div className="empty-orders-icon">
              📦
            </div>

            <h2>No Orders Yet</h2>

            <p>
              You haven't placed any orders yet.
            </p>

            <Link
              to="/products"
              className="orders-shop-btn"
            >
              Start Shopping
            </Link>

          </div>

        </div>

      </main>
    );
  }

  return (
    <main className="orders-page">

      {/* ================= HEADER ================= */}

      <section className="orders-header">

        <div className="container">

          <span>BOOKNOOK</span>

          <h1>My Orders</h1>

          <p>
            You have placed {orders.length}{" "}
            {orders.length === 1 ? "order" : "orders"}.
          </p>

        </div>

      </section>


      {/* ================= ORDERS ================= */}

      <section className="orders-section">

        <div className="container">

          <div className="orders-top">

            <h2>
              Order History
            </h2>

            <Link to="/products">
              Continue Shopping
            </Link>

          </div>


          <div className="orders-list">

            {orders.map((order) => (

              <div
                className="order-history-card"
                key={order.orderId}
              >

                {/* Order Header */}

                <div className="order-history-header">

                  <div>

                    <span>
                      Order ID
                    </span>

                    <strong>
                      {order.orderId}
                    </strong>

                  </div>


                  <div>

                    <span>
                      Order Date
                    </span>

                    <strong>
                      {order.orderDate}
                    </strong>

                  </div>


                  <div>

                    <span>
                      Delivery
                    </span>

                    <strong>
                      {order.deliveryDate}
                    </strong>

                  </div>


                  <div>

                    <span>
                      Status
                    </span>

                    <strong className="order-status">
                      {order.status}
                    </strong>

                  </div>

                </div>


                {/* Products */}

                <div className="order-history-products">

                  {order.items.map((item) => (

                    <div
                      className="order-history-product"
                      key={`${order.orderId}-${item.id}`}
                    >

                      <img
                        src={item.image}
                        alt={item.title}
                      />

                      <div className="order-product-info">

                        <Link
                          to={`/products/${item.id}`}
                        >
                          {item.title}
                        </Link>

                        <p>
                          by {item.author}
                        </p>

                        <span>
                          Quantity: {item.quantity}
                        </span>

                      </div>


                      <strong>
                        ₹
                        {(
                          item.price *
                          item.quantity
                        ).toLocaleString("en-IN")}
                      </strong>

                    </div>

                  ))}

                </div>


                {/* Order Footer */}

                <div className="order-history-footer">

                  <div>

                    <span>
                      Payment
                    </span>

                    <strong>
                      {order.customer.paymentMethod}
                    </strong>

                  </div>


                  <div>

                    <span>
                      Total Amount
                    </span>

                    <strong className="order-total">
                      ₹
                      {order.total.toLocaleString(
                        "en-IN"
                      )}
                    </strong>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}

export default Orders;