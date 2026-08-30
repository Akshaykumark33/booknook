import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import books from "../data/book";

function ProductDetail() {
  const { id } = useParams();

  const book = books.find(
    (item) => item.id === Number(id)
  );

  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);

  if (!book) {
    return (
      <div className="container py-5 text-center">
        <h2>Book not found</h2>

        <p>
          The book you are looking for does not exist.
        </p>

        <Link
          to="/products"
          className="btn booknook-primary-btn"
        >
          Back to Books
        </Link>
      </div>
    );
  }

  const increaseQuantity = () => {
    setQuantity((previous) => previous + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((previous) =>
      previous > 1 ? previous - 1 : 1
    );
  };

  const handleAddToCart = () => {
    const existingCart =
      JSON.parse(localStorage.getItem("booknookCart")) || [];

    const existingItem = existingCart.find(
      (item) => item.id === book.id
    );

    let updatedCart;

    if (existingItem) {
      updatedCart = existingCart.map((item) =>
        item.id === book.id
          ? {
              ...item,
              quantity: item.quantity + quantity
            }
          : item
      );
    } else {
      updatedCart = [
        ...existingCart,
        {
          ...book,
          quantity: quantity
        }
      ];
    }

    localStorage.setItem(
      "booknookCart",
      JSON.stringify(updatedCart)
    );

    alert(`${book.title} added to cart!`);
  };

  const toggleWishlist = () => {
    setWishlist((previous) => !previous);
  };

  const relatedProducts = books
    .filter((item) => {
      if (!book) return false;

      // Don't show the current product
      if (item.id === book.id) return false;

      // Same category
      if (item.category !== book.category) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {

      // For stationery, prioritize same subcategory
      if (
        book.category === "Stationery"
      ) {
        const aMatch =
          a.subcategory === book.subcategory;

        const bMatch =
          b.subcategory === book.subcategory;

        if (aMatch && !bMatch) return -1;
        if (!aMatch && bMatch) return 1;
      }

      // Otherwise prioritize higher rating
      return b.rating - a.rating;
    })
    .slice(0, 4);

  return (
    <main className="product-detail-page">

      {/* Breadcrumb */}

      <div className="container">

        <div className="product-breadcrumb">

          <Link to="/">
            Home
          </Link>

          <span> / </span>

          <Link to="/products">
            Books
          </Link>

          <span> / </span>

          <span>{book.title}</span>

        </div>

      </div>


      {/* Product Detail */}

      <section className="product-detail-section">

        <div className="container">

          <div className="row g-5 align-items-start">

            {/* ================= BOOK IMAGE ================= */}

            <div className="col-lg-5">

              <div className="detail-image-wrapper">

                <img
                  src={book.image}
                  alt={book.title}
                  className="detail-book-image"
                />

              </div>

            </div>


            {/* ================= BOOK INFORMATION ================= */}

            <div className="col-lg-7">

              <div className="detail-info">

                <span className="detail-category">
                  {book.category}
                </span>

                <h1>
                  {book.title}
                </h1>

                <p className="detail-author">
                  by <strong>{book.author}</strong>
                </p>


                {/* Rating */}

                <div className="detail-rating">

                  <span>
                    ⭐ {book.rating}
                  </span>

                  <span className="rating-text">
                    Excellent Rating
                  </span>

                </div>


                {/* Price */}

                <div className="detail-price">
                  ₹{book.price}
                </div>


                <p className="detail-description">
                  {book.description}
                </p>


                {/* Book Information */}

                <div className="book-specifications">

                  <div>
                    <span>Publisher</span>
                    <strong>{book.publisher}</strong>
                  </div>

                  <div>
                    <span>ISBN</span>
                    <strong>{book.isbn}</strong>
                  </div>

                  <div>
                    <span>Language</span>
                    <strong>{book.language}</strong>
                  </div>

                  <div>
                    <span>Category</span>
                    <strong>{book.category}</strong>
                  </div>

                </div>


                {/* Quantity */}

                <div className="quantity-section">

                  <label>
                    Quantity
                  </label>

                  <div className="quantity-control">

                    <button
                      onClick={decreaseQuantity}
                    >
                      −
                    </button>

                    <span>
                      {quantity}
                    </span>

                    <button
                      onClick={increaseQuantity}
                    >
                      +
                    </button>

                  </div>

                </div>


                {/* Buttons */}

                <div className="detail-actions">

                  <button
                    className="detail-cart-btn"
                    onClick={handleAddToCart}
                  >
                    🛒 Add to Cart
                  </button>

                  <button
                    className={`detail-wishlist-btn ${
                      wishlist ? "active" : ""
                    }`}
                    onClick={toggleWishlist}
                  >
                    {wishlist ? "♥" : "♡"}
                  </button>

                </div>

                {/* ================= RELATED PRODUCTS ================= */}

                <section className="related-products-section">

                  <div className="container">

                    <div className="related-products-header">

                      <span>
                        YOU MAY ALSO LIKE
                      </span>

                      <h2>
                        Related Products
                      </h2>

                      <p>
                        Discover more products you might enjoy.
                      </p>

                    </div>


                    {relatedProducts.length > 0 && (

                      <div className="row g-4">

                        {relatedProducts.map((item) => (

                          <div
                            className="col-xl-3 col-lg-4 col-md-6"
                            key={item.id}
                          >

                            <div className="related-product-card">

                              {/* Image */}

                              <Link
                                to={`/products/${item.id}`}
                                className="related-product-image"
                              >

                                <img
                                  src={item.image}
                                  alt={item.title}
                                />

                              </Link>


                              {/* Details */}

                              <div className="related-product-info">

                                <div className="related-rating">
                                  ⭐ {item.rating}
                                </div>

                                <span className="related-category">
                                  {item.subcategory ||
                                    item.category}
                                </span>

                                <h3>
                                  {item.title}
                                </h3>

                                <p>
                                  {item.author}
                                </p>


                                <div className="related-bottom">

                                  <strong>
                                    ₹{item.price}
                                  </strong>

                                  <Link
                                    to={`/products/${item.id}`}
                                  >
                                    View
                                  </Link>

                                </div>

                              </div>

                            </div>

                          </div>

                        ))}

                      </div>

                    )}

                  </div>

                </section>


                {/* Back */}

                <Link
                  to="/products"
                  className="continue-shopping"
                >
                  ← Continue Shopping
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default ProductDetail;