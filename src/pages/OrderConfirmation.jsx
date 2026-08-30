import { Link } from "react-router-dom";

function OrderConfirmation() {
  const order =
    JSON.parse(
      localStorage.getItem("booknookOrder")
    );

  if (!order) {
    return (
      <div className="container empty-checkout">

        <h2>No order found</h2>

        <Link
          to="/products"
          className="checkout-back-btn"
        >
          Browse Books
        </Link>

      </div>
    );
  }

  return (
    <main className="order-confirmation-page">

      <div className="container">

        <div className="confirmation-card">

          <div className="success-icon">
            ✓
          </div>

          <h1>
            Order Placed Successfully!
          </h1>

          <p>
            Thank you for shopping with BookNook.
          </p>


          <div className="order-details">

            <div>
              <span>Order ID</span>
              <strong>{order.orderId}</strong>
            </div>

            <div>
              <span>Order Date</span>
              <strong>{order.orderDate}</strong>
            </div>

            <div>
              <span>Expected Delivery</span>
              <strong>{order.deliveryDate}</strong>
            </div>

            <div>
              <span>Payment Method</span>
              <strong>
                {order.customer.paymentMethod}
              </strong>
            </div>

            {/* Gift Wrapping */}
            {order.giftWrap && (
              <div>
                <span>
                  🎁 Gift Wrapping
                </span>

                <strong>
                  {order.giftWrapType} - ₹
                  {order.giftWrapAmount}
                </strong>
              </div>
            )}

            <div>
              <span>Total Amount</span>
              <strong>
                ₹{order.total.toLocaleString("en-IN")}
              </strong>
            </div>

          </div>

          {order.giftWrap && (
            <div className="gift-confirmation-box">

              <div className="gift-icon">
                🎁
              </div>

              <div>
                <h4>Gift Wrapping Added</h4>

                <p>
                  Your order will be beautifully wrapped
                  using our {order.giftWrapType} gift wrap.
                </p>
              </div>

            </div>
          )}


          <div className="delivery-info">

            <h3>
              📦 Delivery Address
            </h3>

            <p>
              <strong>
                {order.customer.fullName}
              </strong>
            </p>

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


          <div className="confirmation-actions">

            <Link
              to="/products"
              className="continue-shopping-btn"
            >
              Continue Shopping
            </Link>

            <Link
              to="/"
              className="home-btn"
            >
              Go to Home
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}

export default OrderConfirmation;