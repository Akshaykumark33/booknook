import  { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import books from "../data/book";

function Products() {

  const [searchParams] = useSearchParams();

  const categoryFromUrl = searchParams.get("category") || "All";

  const searchFromUrl = searchParams.get("search") || "";

  const [search, setSearch] = useState(searchFromUrl);
  useEffect(() => {
    setSearch(searchFromUrl);
  }, [searchFromUrl]);
  const [category, setCategory] = useState(categoryFromUrl);
  const [subcategory,setSubcategory] = useState("All");
  const [author, setAuthor] = useState("All");
  const [maxPrice, setMaxPrice] = useState(1000);
  const [minRating, setMinRating] = useState(0);
  const [language, setLanguage] = useState("All");
  const [sort, setSort] = useState("default");

  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(
      localStorage.getItem("booknookWishlist")
    ) || [];
  });


  const categories = [
    "All",
    "Fiction",
    "Non-Fiction",
    "Children's Books",
    "Stationery"
  ];

  const subcategories = [
    "All",
    ...new Set(
      books
        .filter(
          (book) =>
            category === "All" ||
            book.category === category
        )
        .map((book) => book.subcategory)
        .filter(Boolean)
    ),
  ];


  const authors = [
    "All",
    ...new Set(books.map((book) => book.author))
  ];


  const languages = [
    "All",
    ...new Set(books.map((book) => book.language))
  ];

  const handleAddToCart = (book) => {
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
              quantity: (item.quantity || 1) + 1
            }
          : item
      );
    } else {
      updatedCart = [
        ...existingCart,
        {
          ...book,
          quantity: 1
        }
      ];
    }

    localStorage.setItem(
      "booknookCart",
      JSON.stringify(updatedCart)
    );

    // Notify Navbar
    window.dispatchEvent(
      new Event("cartUpdated")
    );

    alert(`${book.title} added to cart!`);
  };


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


  const filteredBooks = useMemo(() => {

    let result = books.filter((book) => {

      const searchText = search.toLowerCase();

      const matchesSearch =
        book.title?.toLowerCase().includes(searchText) ||
        book.author?.toLowerCase().includes(searchText) ||
        String(book.isbn || "").includes(searchText);

      const matchesCategory =
        category === "All" ||
        book.category === category;

      const matchesSubcategory =
        subcategory === "All" ||
        book.subcategory === subcategory;  

      const matchesAuthor =
        author === "All" ||
        book.author === author;

      const matchesPrice =
        book.price <= Number(maxPrice);

      const matchesRating =
        book.rating >= Number(minRating);

      const matchesLanguage =
        language === "All" ||
        book.language === language;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesSubcategory &&
        matchesAuthor &&
        matchesPrice &&
        matchesRating &&
        matchesLanguage
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

  }, [
    search,
    category,
    subcategory,
    author,
    maxPrice,
    minRating,
    language,
    sort
  ]);


  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setSubcategory("All");
    setAuthor("All");
    setMaxPrice(1000);
    setMinRating(0);
    setLanguage("All");
    setSort("default");
  };

  

  return (
    <main className="products-page">

      {/* Page Header */}
      <section className="products-header">

        <div className="container">

          <span>BOOKNOOK COLLECTION</span>

          <h1>Explore Our Books</h1>

          <p>
            Discover stories, knowledge and inspiration
            from our carefully selected collection.
          </p>

        </div>

      </section>


      <div className="container py-5">

        <div className="row g-4">

          {/* ================= FILTER SIDEBAR ================= */}

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

                <label>Search Books</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Book name, author, ISBN"
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                />

              </div>


              {/* Category */}

              <div className="filter-group">

                <label>Category</label>

                <select
                  className="form-select"
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                    setSubcategory("All");
                  }}
                >

                  {categories.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}

                </select>

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


              {/* Author */}

              <div className="filter-group">

                <label>Author</label>

                <select
                  className="form-select"
                  value={author}
                  onChange={(e) =>
                    setAuthor(e.target.value)
                  }
                >

                  {authors.map((item) => (
                    <option key={item} value={item}>
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
                  min="200"
                  max="1000"
                  step="50"
                  value={maxPrice}
                  onChange={(e) =>
                    setMaxPrice(e.target.value)
                  }
                />

              </div>


              {/* Rating */}

              <div className="filter-group">

                <label>Minimum Rating</label>

                <select
                  className="form-select"
                  value={minRating}
                  onChange={(e) =>
                    setMinRating(e.target.value)
                  }
                >

                  <option value="0">
                    All Ratings
                  </option>

                  <option value="4">
                    ⭐ 4.0+
                  </option>

                  <option value="4.5">
                    ⭐ 4.5+
                  </option>

                  <option value="4.7">
                    ⭐ 4.7+
                  </option>

                </select>

              </div>


              {/* Language */}

              <div className="filter-group">

                <label>Language</label>

                <select
                  className="form-select"
                  value={language}
                  onChange={(e) =>
                    setLanguage(e.target.value)
                  }
                >

                  {languages.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}

                </select>

              </div>

            </div>

          </div>


          {/* ================= PRODUCTS ================= */}

          <div className="col-lg-9">

            <div className="products-top">

              <p>
                <strong>{filteredBooks.length}</strong>{" "}
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

            {filteredBooks.length > 0 ? (

              <div className="row g-4">

                {filteredBooks.map((book) => (

                  <div
                    className="col-xl-4 col-md-6"
                    key={book.id}
                  >

                    <div className="product-card">

                      {/* Wishlist */}
                      <button
                        className={`wishlist-btn ${
                          isInWishlist(book.id)
                            ? "active"
                            : ""
                        }`}
                        onClick={() => toggleWishlist(book)}
                        aria-label="Add to wishlist"
                      >
                        {isInWishlist(book.id) ? "♥" : "♡"}
                      </button>

                      <Link
                        to={`/products/${book.id}`}
                        className="product-image"
                      >

                        <img
                          src={book.image}
                          alt={book.title}
                        />

                      </Link>


                      <div className="product-info">

                        <div className="product-rating">
                          ⭐ {book.rating}
                        </div>

                        <span className="product-category">
                          {book.category}
                        </span>

                        <h3>{book.title}</h3>

                        <p className="product-author">
                          {book.author}
                        </p>


                        <div className="product-bottom">

                          <strong>
                            ₹{book.price}
                          </strong>

                          <button 
                          className="product-cart-btn"
                          onClick={ () => handleAddToCart(book)}
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

                <h3>No Items found</h3>

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

export default Products;