import {  useState } from "react";
import { Link } from "react-router-dom";

function Cart() {
 const [cart, setCart] = useState(() => {
  return JSON.parse(
    localStorage.getItem("booknookCart")
  ) || [];
 });

  const updateCart = (updatedCart) => {
    setCart(updatedCart);

    localStorage.setItem(
      "booknookCart",
      JSON.stringify(updatedCart)
    );
  };

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1
          }
        : item
    );

    updateCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1
            }
          : item
      )
      .filter((item) => item.quantity > 0);

    updateCart(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter(
      (item) => item.id !== id
    );

    updateCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);

    localStorage.removeItem("booknookCart");
  };

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const shipping = subtotal === 0
    ? 0
    : subtotal >= 2000
      ? 0
      : 99;

  const total = subtotal + shipping;

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <main className="cart-page">

        <section className="cart-header">
          <div className="container">
            <span>BOOKNOOK</span>
            <h1>Shopping Cart</h1>
            <p>
              Review the books you've selected.
            </p>
          </div>
        </section>

        <div className="container">

          <div className="empty-cart">

            <div className="empty-cart-icon">
              🛒
            </div>

            <h2>Your Cart is Empty</h2>

            <p>
              Looks like you haven't added any books yet.
            </p>

            <Link
              to="/products"
              className="btn booknook-primary-btn"
            >
              Explore Books
            </Link>

          </div>

        </div>

      </main>
    );
  }

  return (
    <main className="cart-page">

      {/* ================= HEADER ================= */}

      <section className="cart-header">

        <div className="container">

          <span>BOOKNOOK</span>

          <h1>Shopping Cart</h1>

          <p>
            {totalItems}{" "}
            {totalItems === 1 ? "item" : "items"} in your cart.
          </p>

        </div>

      </section>


      {/* ================= CART ================= */}

      <section className="cart-section">

        <div className="container">

          <div className="row g-4">

            {/* ================= CART ITEMS ================= */}

            <div className="col-lg-8">

              <div className="cart-items-card">

                <div className="cart-items-header">

                  <h2>
                    Your Selected Items
                  </h2>

                  <button
                    className="clear-cart-btn"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </button>

                </div>


                {cart.map((item) => (

                  <div
                    className="cart-item"
                    key={item.id}
                  >

                    {/* Image */}

                    <Link
                      to={`/products/${item.id}`}
                      className="cart-item-image"
                    >

                      <img
                        src={item.image}
                        alt={item.title}
                      />

                    </Link>


                    {/* Information */}

                    <div className="cart-item-info">

                      <Link
                        to={`/products/${item.id}`}
                        className="cart-item-title"
                      >
                        {item.title}
                      </Link>

                      <p>
                        by {item.author}
                      </p>

                      <span className="cart-item-category">
                        {item.category}
                      </span>

                      <div className="cart-item-price">
                        ₹{item.price}
                      </div>

                    </div>


                    {/* Quantity */}

                    <div className="cart-quantity">

                      <button
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                      >
                        −
                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                      >
                        +
                      </button>

                    </div>


                    {/* Total */}

                    <div className="cart-item-total">

                      ₹
                      {(
                        item.price * item.quantity
                      ).toLocaleString("en-IN")}

                    </div>


                    {/* Remove */}

                    <button
                      className="remove-item-btn"
                      onClick={() =>
                        removeItem(item.id)
                      }
                      title="Remove item"
                    >
                      🗑️
                    </button>

                  </div>

                ))}

              </div>


              {/* Continue Shopping */}

              <div className="cart-navigation">

                <Link
                  to="/products"
                  className="continue-shopping"
                >
                  ← Continue Shopping
                </Link>

              </div>

            </div>


            {/* ================= ORDER SUMMARY ================= */}

            <div className="col-lg-4">

              <div className="cart-summary">

                <h2>
                  Order Summary
                </h2>


                <div className="summary-row">

                  <span>
                    Subtotal
                  </span>

                  <strong>
                    ₹{subtotal.toLocaleString("en-IN")}
                  </strong>

                </div>


                <div className="summary-row">

                  <span>
                    Shipping
                  </span>

                  <strong>
                    {shipping === 0
                      ? "FREE"
                      : `₹${shipping}`}
                  </strong>

                </div>


                {subtotal > 0 && subtotal < 2000 && (
                  <div className="shipping-message">
                    Add ₹
                    {(2000 - subtotal).toLocaleString(
                      "en-IN"
                    )}{" "}
                    more for free shipping.
                  </div>
                )}


                <hr />


                <div className="summary-total">

                  <span>
                    Total
                  </span>

                  <strong>
                    ₹{total.toLocaleString("en-IN")}
                  </strong>

                </div>


                <Link
                  to="/checkout"
                  className="checkout-btn"
                >
                  Proceed to Checkout →
                </Link>


                <p className="secure-checkout">
                  🔒 Secure checkout
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Cart;