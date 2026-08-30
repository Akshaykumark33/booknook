import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Wishlist() {
  const navigate = useNavigate();

  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedWishlist =
      JSON.parse(
        localStorage.getItem("booknookWishlist")
      ) || [];

    setWishlist(savedWishlist);
  }, []);

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter(
      (book) => book.id !== id
    );

    setWishlist(updatedWishlist);

    localStorage.setItem(
      "booknookWishlist",
      JSON.stringify(updatedWishlist)
    );
  };

  const addToCart = (book) => {
    const cart =
      JSON.parse(
        localStorage.getItem("booknookCart")
      ) || [];

    const existingItem = cart.find(
      (item) => item.id === book.id
    );

    let updatedCart;

    if (existingItem) {
      updatedCart = cart.map((item) =>
        item.id === book.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    } else {
      updatedCart = [
        ...cart,
        {
          ...book,
          quantity: 1,
        },
      ];
    }

    localStorage.setItem(
      "booknookCart",
      JSON.stringify(updatedCart)
    );

    alert(`${book.title} added to cart!`);
  };

  return (
    <main className="wishlist-page">

      {/* Header */}

      <section className="wishlist-header">

        <div className="container">

          <span>BOOKNOOK</span>

          <h1>My Wishlist</h1>

          <p>
            Save your favourite books and shop them
            whenever you're ready.
          </p>

        </div>

      </section>


      {/* Wishlist */}

      <section className="wishlist-section">

        <div className="container">

          {wishlist.length === 0 ? (

            <div className="empty-wishlist">

              <div className="wishlist-empty-icon">
                ❤️
              </div>

              <h2>Your Wishlist is Empty</h2>

              <p>
                Start adding books you love to your
                wishlist.
              </p>

              <Link
                to="/products"
                className="wishlist-shop-btn"
              >
                Explore Books
              </Link>

            </div>

          ) : (

            <>

              <div className="wishlist-top">

                <h2>
                  {wishlist.length}{" "}
                  {wishlist.length === 1
                    ? "Book"
                    : "Books"}{" "}
                  Saved
                </h2>

                <Link to="/products">
                  Continue Shopping
                </Link>

              </div>


              <div className="row g-4">

                {wishlist.map((book) => (

                  <div
                    className="col-xl-3 col-lg-4 col-md-6"
                    key={book.id}
                  >

                    <div className="wishlist-card">

                      {/* Remove */}

                      <button
                        className="wishlist-remove"
                        onClick={() =>
                          removeFromWishlist(book.id)
                        }
                        title="Remove from wishlist"
                      >
                        ×
                      </button>


                      {/* Image */}

                      <Link
                        to={`/products/${book.id}`}
                        className="wishlist-image"
                      >

                        <img
                          src={book.image}
                          alt={book.title}
                        />

                      </Link>


                      {/* Info */}

                      <div className="wishlist-info">

                        <span>
                          {book.category}
                        </span>

                        <h3>
                          {book.title}
                        </h3>

                        <p>
                          {book.author}
                        </p>

                        <div className="wishlist-rating">
                          ⭐ {book.rating}
                        </div>


                        <div className="wishlist-bottom">

                          <strong>
                            ₹{book.price}
                          </strong>

                          <button
                            onClick={() =>
                              addToCart(book)
                            }
                          >
                            Add to Cart
                          </button>

                        </div>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </>

          )}

        </div>

      </section>

    </main>
  );
}

export default Wishlist;