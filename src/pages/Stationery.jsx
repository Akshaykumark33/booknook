import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import books from "../data/book";

function Stationery() {

  
  const [subcategory, setSubcategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("default");

  const [searchParams] = useSearchParams();

  const searchFromUrl =
    searchParams.get("search") || "";

  const [search, setSearch] =
    useState(searchFromUrl);

  useEffect(() => {
    setSearch(searchFromUrl);
  }, [searchFromUrl]);

  const subcategories = [
    "All",
    "Notebooks & Journals",
    "Pens & Pencils",
    "Art Supplies",
    "Desk Accessories",
    "Gift Sets"
  ];

  //Wishlist functions
  const isInWishlist = (id) => {
    return wishlist.some((item) => item.id === id);
  };

  const toggleWishlist = (book) => {
    let updatedWishlist;

    if (isInWishlist(book.id)) {
      updatedWishlist = wishlist.filter(
        (item) => item.id !== book.id
      );
    } else {
      updatedWishlist = [...wishlist, book];
    }

    setWishlist(updatedWishlist);

    localStorage.setItem(
      "booknookWishlist",
      JSON.stringify(updatedWishlist)
    );
  };

  const [wishlist, setWishlist] = useState(() => {
    return (
      JSON.parse(
        localStorage.getItem("booknookWishlist")
      ) || []
    );
  });

  const stationeryProducts = useMemo(() => {

    let result = books.filter((book) => {

      const isStationery =
        book.category === "Stationery";

      const matchesSearch =
        book.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        book.author
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesSubcategory =
        subcategory === "All" ||
        book.subcategory === subcategory;

      const matchesPrice =
        book.price <= Number(maxPrice);

      return (
        isStationery &&
        matchesSearch &&
        matchesSubcategory &&
        matchesPrice
      );
    });

    if (sort === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    if (sort === "name") {
      result.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }

    return result;

  }, [search, subcategory, maxPrice, sort]);


  const clearFilters = () => {
    setSearch("");
    setSubcategory("All");
    setMaxPrice(1000);
    setSort("default");
  };

  //Add to cart
  const addToCart = (book) => {
    const existingCart =
      JSON.parse(
        localStorage.getItem("booknookCart")
      ) || [];

    const existingItem = existingCart.find(
      (item) => item.id === book.id
    );

    let updatedCart;

    if (existingItem) {
      updatedCart = existingCart.map((item) =>
        item.id === book.id
          ? {
              ...item,
              quantity: (item.quantity || 1) + 1,
            }
          : item
      );
    } else {
      updatedCart = [
        ...existingCart,
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

    //Tell navbar that cart changed
    window.dispatchEvent(
      new Event("cartUpdated")
    );

    alert(`${book.title} added to cart!`);
  };

  return (
    <main className="stationery-page">

      {/* ================= HEADER ================= */}

      <section className="stationery-header">

        <div className="container">

          <span>BOOKNOOK STATIONERY</span>

          <h1>Stationery Collection</h1>

          <p>
            Discover beautiful stationery for study,
            work, creativity and everyday life.
          </p>

        </div>

      </section>


      {/* ================= CONTENT ================= */}

      <div className="container py-5">

        <div className="row g-4">

          {/* ================= FILTERS ================= */}

          <div className="col-lg-3">

            <div className="filter-card">

              <div className="filter-title">

                <h3>Filters</h3>

                <button onClick={clearFilters}>
                  Clear All
                </button>

              </div>


              {/* Search */}

              <div className="filter-group">

                <label>Search Stationery</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Search stationery..."
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                />

              </div>


              {/* Subcategory */}

              <div className="filter-group">

                <label>Subcategory</label>

                <select
                  className="form-select"
                  value={subcategory}
                  onChange={(e) =>
                    setSubcategory(e.target.value)
                  }
                >

                  {subcategories.map((item) => (

                    <option
                      key={item}
                      value={item}
                    >
                      {item}
                    </option>

                  ))}

                </select>

              </div>


              {/* Price */}

              <div className="filter-group">

                <label>
                  Maximum Price: ₹{maxPrice}
                </label>

                <input
                  type="range"
                  className="form-range"
                  min="100"
                  max="1000"
                  step="50"
                  value={maxPrice}
                  onChange={(e) =>
                    setMaxPrice(e.target.value)
                  }
                />

              </div>

            </div>

          </div>


          {/* ================= PRODUCTS ================= */}

          <div className="col-lg-9">

            <div className="products-top">

              <p>
                <strong>
                  {stationeryProducts.length}
                </strong>{" "}
                items found
              </p>

              <select
                className="form-select sort-select"
                value={sort}
                onChange={(e) =>
                  setSort(e.target.value)
                }
              >

                <option value="default">
                  Default
                </option>

                <option value="price-low">
                  Price: Low to High
                </option>

                <option value="price-high">
                  Price: High to Low
                </option>

                <option value="rating">
                  Highest Rated
                </option>

                <option value="name">
                  Name: A-Z
                </option>

              </select>

            </div>


            {/* Product Grid */}

            {stationeryProducts.length > 0 ? (

              <div className="row g-4">

                {stationeryProducts.map((book) => (

                  <div
                    className="col-xl-4 col-md-6"
                    key={book.id}
                  >

                    <div className="product-card">

                      {/* Wishlist */}

                     <button
                      className={`wishlist-btn ${
                        isInWishlist(book.id) ? "active" : ""
                      }`}
                      onClick={() => toggleWishlist(book)}
                      aria-label="Add to wishlist"
                    >
                      {isInWishlist(book.id) ? "♥" : "♡"}
                    </button>


                      {/* Image */}

                      <Link
                        to={`/products/${book.id}`}
                        className="product-image"
                      >

                        <img
                          src={book.image}
                          alt={book.title}
                        />

                      </Link>


                      {/* Information */}

                      <div className="product-info">

                        <div className="product-rating">
                          ⭐ {book.rating}
                        </div>

                        <span className="product-category">
                          {book.subcategory}
                        </span>

                        <h3>
                          {book.title}
                        </h3>

                        <p className="product-author">
                          {book.author}
                        </p>


                        <div className="product-bottom">

                          <strong>
                            ₹{book.price}
                          </strong>

                          <button 
                          className="product-cart-btn"
                          onClick={() => addToCart(book)}
                          >
                            Add to Cart
                          </button>

                        </div>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            ) : (

              <div className="no-products">

                <div>✏️</div>

                <h3>
                  No stationery found
                </h3>

                <p>
                  Try changing your search or filters.
                </p>

                <button
                  className="btn booknook-primary-btn"
                  onClick={clearFilters}
                >
                  Clear Filters
                </button>

              </div>

            )}

          </div>

        </div>

      </div>

    </main>
  );
}

export default Stationery;