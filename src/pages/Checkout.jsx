import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  const [giftWrap, setGiftWrap] = useState(false);
  const [giftWrapType, setGiftWrapType] = useState("Classic");

  const cart =
    JSON.parse(localStorage.getItem("booknookCart")) || [];

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping =
    subtotal === 0
      ? 0
      : subtotal >= 2000
        ? 0
        : 99;

  const giftWrapPrices = {
    Classic: 40,
    Premium: 70,
    Birthday: 60
  };

  const giftWrapAmount = giftWrap
    ? giftWrapPrices[giftWrapType]
    : 0;

  const total = subtotal + shipping + giftWrapAmount;

  

  

  

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    paymentMethod: "Cash on Delivery",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty.");
      navigate("/products");
      return;
    }

    const order = {
      orderId: `BN${new Date().getTime()}`,
      orderDate: new Date().toLocaleDateString("en-IN"),
      deliveryDate: new Date(
        new Date().getTime() + 5 * 24 * 60 * 60 * 1000
      ).toLocaleDateString("en-IN"),
      customer: formData,
      items: cart,
      subtotal,
      shipping,
      giftWrap,
      giftWrapType: giftWrap ? giftWrapType : null,
      giftWrapAmount,
      total,
      status: "Order Placed",
    };

    const existingOrders =
      JSON.parse(
        localStorage.getItem("booknookOrders")
      ) || [];

    existingOrders.unshift(order);

    localStorage.setItem(
      "booknookOrders",
      JSON.stringify(existingOrders)
    );

    // Keep the latest order for backward compatibility
    localStorage.setItem(
      "booknookOrder",
      JSON.stringify(order)
    );
    localStorage.removeItem("booknookCart");

    alert("Your order has been placed successfully!");

    navigate("/order-confirmation");
  };

  if (cart.length === 0) {
    return (
      <main className="checkout-page">
        <div className="container empty-checkout">

          <h2>Your cart is empty</h2>

          <p>
            Add some books before proceeding to checkout.
          </p>

          <Link
            to="/products"
            className="checkout-back-btn"
          >
            Browse Books
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="checkout-page">

      {/* Header */}

      <section className="checkout-header">

        <div className="container">

          <span>BOOKNOOK</span>

          <h1>Checkout</h1>

          <p>
            Complete your details to place your order.
          </p>

        </div>

      </section>


      {/* Checkout Content */}

      <section className="checkout-section">

        <div className="container">

          <form onSubmit={handlePlaceOrder}>

            <div className="row g-4">

              {/* ================= SHIPPING DETAILS ================= */}

              <div className="col-lg-7">

                <div className="checkout-card">

                  <h2>
                    📍 Shipping Information
                  </h2>


                  <div className="row g-3">

                    {/* Full Name */}

                    <div className="col-12">

                      <label>
                        Full Name
                      </label>

                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                      />

                    </div>


                    {/* Phone */}

                    <div className="col-md-6">

                      <label>
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        pattern="[0-9]{10}"
                        maxLength="10"
                        required
                      />

                    </div>


                    {/* Pincode */}

                    <div className="col-md-6">

                      <label>
                        Pincode
                      </label>

                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        placeholder="6-digit pincode"
                        pattern="[0-9]{6}"
                        maxLength="6"
                        required
                      />

                    </div>


                    {/* Address */}

                    <div className="col-12">

                      <label>
                        Delivery Address
                      </label>

                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="House No., Street, Area"
                        rows="4"
                        required
                      />

                    </div>


                    {/* City */}

                    <div className="col-md-6">

                      <label>
                        City
                      </label>

                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Enter city"
                        required
                      />

                    </div>


                    {/* State */}

                    <div className="col-md-6">

                      <label>
                        State
                      </label>

                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="Enter state"
                        required
                      />

                    </div>

                  </div>

                </div>


                {/* ================= PAYMENT ================= */}

                <div className="checkout-card payment-card">

                  <h2>
                    💳 Payment Method
                  </h2>

                  <label className="payment-option">

                    <input
                      type="radio"
                      name="paymentMethod"
                      value="Cash on Delivery"
                      checked={
                        formData.paymentMethod ===
                        "Cash on Delivery"
                      }
                      onChange={handleChange}
                    />

                    <span>
                      <strong>Cash on Delivery</strong>
                      <small>
                        Pay when your order arrives
                      </small>
                    </span>

                  </label>


                  <label className="payment-option">

                    <input
                      type="radio"
                      name="paymentMethod"
                      value="UPI"
                      checked={
                        formData.paymentMethod === "UPI"
                      }
                      onChange={handleChange}
                    />

                    <span>
                      <strong>UPI</strong>
                      <small>
                        Pay using your UPI app
                      </small>
                    </span>

                  </label>


                  <label className="payment-option">

                    <input
                      type="radio"
                      name="paymentMethod"
                      value="Credit/Debit Card"
                      checked={
                        formData.paymentMethod ===
                        "Credit/Debit Card"
                      }
                      onChange={handleChange}
                    />

                    <span>
                      <strong>
                        Credit / Debit Card
                      </strong>

                      <small>
                        Visa, Mastercard, RuPay
                      </small>
                    </span>

                  </label>

                </div>

              </div>

              {/* Gift Wrapping */}

              <div className="gift-wrap-card">

                <div className="gift-wrap-header">

                  <h3>🎁 Gift Wrapping</h3>

                  <p>
                    Make your order extra special with gift wrapping.
                  </p>

                </div>

                <label className="gift-wrap-checkbox">

                  <input
                    type="checkbox"
                    checked={giftWrap}
                    onChange={(e) =>
                      setGiftWrap(e.target.checked)
                    }
                  />

                  <span>
                    Add Gift Wrapping
                  </span>

                </label>


                {giftWrap && (

                  <div className="gift-wrap-options">

                    <label>

                      <input
                        type="radio"
                        name="giftWrapType"
                        value="Classic"
                        checked={giftWrapType === "Classic"}
                        onChange={(e) =>
                          setGiftWrapType(e.target.value)
                        }
                      />

                      <span>
                        🎁 Classic Gift Wrap
                      </span>

                      <strong>₹40</strong>

                    </label>


                    <label>

                      <input
                        type="radio"
                        name="giftWrapType"
                        value="Premium"
                        checked={giftWrapType === "Premium"}
                        onChange={(e) =>
                          setGiftWrapType(e.target.value)
                        }
                      />

                      <span>
                        ✨ Premium Gift Wrap
                      </span>

                      <strong>₹70</strong>

                    </label>


                    <label>

                      <input
                        type="radio"
                        name="giftWrapType"
                        value="Birthday"
                        checked={giftWrapType === "Birthday"}
                        onChange={(e) =>
                          setGiftWrapType(e.target.value)
                        }
                      />

                      <span>
                        🎂 Birthday Gift Wrap
                      </span>

                      <strong>₹60</strong>

                    </label>

                  </div>

                )}

              </div>


              {/* ================= ORDER SUMMARY ================= */}

              <div className="col-lg-5">

                <div className="checkout-summary">

                  <h2>
                    Order Summary
                  </h2>


                  {/* Products */}

                  <div className="checkout-products">

                    {cart.map((item) => (

                      <div
                        className="checkout-product"
                        key={item.id}
                      >

                        <img
                          src={item.image}
                          alt={item.title}
                        />

                        <div>

                          <h3>
                            {item.title}
                          </h3>

                          <p>
                            Qty: {item.quantity}
                          </p>

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


                  {/* Price */}

                  <div className="checkout-price-row">

                    <span>
                      Subtotal
                    </span>

                    <strong>
                      ₹{subtotal.toLocaleString("en-IN")}
                    </strong>

                  </div>


                  <div className="checkout-price-row">

                    <span>
                      Shipping
                    </span>

                    <strong>
                      {shipping === 0
                        ? "FREE"
                        : `₹${shipping}`}
                    </strong>

                  </div>

                  {giftWrap && (
                    <div className="summary-row gift-summary">
                      <span>
                        🎁 Gift Wrapping ({giftWrapType})
                      </span>

                      <strong>
                        ₹{giftWrapAmount}
                      </strong>
                    </div>  
                  )}


                  <hr />


                  <div className="checkout-total">

                    <span>
                      Total
                    </span>

                    <strong>
                      ₹{total.toLocaleString("en-IN")}
                    </strong>

                  </div>


                  <button
                    type="submit"
                    className="place-order-btn"
                  >
                    Place Order
                  </button>


                  <p className="checkout-security">
                    🔒 Your order information is securely
                    stored.
                  </p>

                </div>

              </div>

            </div>

          </form>

        </div>

      </section>

    </main>
  );
}

export default Checkout;