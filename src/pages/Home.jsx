
import { Link } from "react-router-dom";
import authors from "../data/authors";

function Home() {
  const categories = [
    {
      icon: "",
      title: "Fiction",
      description: "Stories, adventures & imagination",
      link: "/products?category=Fiction"
    },
    {
      icon: "",
      title: "Non-Fiction",
      description: "Knowledge, history & inspiration",
      link: "/products?category=Non-Fiction"
    },
    {
      icon: "",
      title: "Children's Books",
      description: "Fun, learning & wonderful stories",
      link: "/products?category=Children's Books"
    },
    {
      icon: "",
      title: "Stationery",
      description: "Everything for your desk",
      link: "/stationery"
    }
  ];

  const featuredBooks = [
    {
      id: 1,
      title: "A Little Life",
      author: "Hanya Yanagihara ",
      price: 560,
      rating: 4.5,
      image:
        "https://www.crossword.in/cdn/shop/files/71kUYNSKKgL._SY466.webp?v=1745917966"
    },
    {
      id: 6,
      title: "Ratan Tata : A Life",
      author: "Thomas mathew",
      price: 399,
      rating: 4.8,
      image:
        "https://cdn.shopify.com/s/files/1/0648/3066/9017/files/8_055dbd06-fde7-4150-842b-0393cc184759_360x.webp?v=1765256042"
    },
    {
      id: 8,
      title: "Little Treasures Disney Frozen",
      author: "Chapter Books",
      price: 200,
      rating: 4.8,
      image:
        "https://cdn.shopify.com/s/files/1/0648/3066/9017/products/little-treasures-disney-frozen-hardcover-disney-bk0446181-40556372328665_360x.jpg?v=1775117050"
    },
    {
      id: 16,
      title: "One Piece 01",
      author: "Eiichiro Oda",
      price: 738,
      rating: 4.4,
      image:
        "https://cdn.shopify.com/s/files/1/0648/3066/9017/files/one-piece-01-romance-dawn-volume-1-paperback-eiichiro-oda-paperback-oda-eiichiro-bk0429151-40738146418905_360x.jpg?v=1775117697"
    }
  ];

  const newArrivals = [
    {
      id: 11,
      title: "The Boyfriend",
      author: "Crime Mystery Thriller",
      price: 499,
      image:
        "https://cdn.shopify.com/s/files/1/0648/3066/9017/files/71sa1DXwbfL._SL1500_360x.jpg?v=1770119112"
    },
    {
      id: 12,
      title: "The Housemaid",
      author: "Freida Mcfadden",
      price: 440,
      image:
        "https://cdn.shopify.com/s/files/1/0648/3066/9017/files/The_Housemaid-Prh_Select_360x.jpg?v=1745709350"
    },
    {
      id: 2,
      title: "The Palace of Illusion",
      author: "Chitra Banerjee Divakaruni",
      price: 499,
      image:
        "https://cdn.shopify.com/s/files/1/0648/3066/9017/files/A1dtQ-soQEL._SL1500_360x.jpg?v=1783577488"
    },
    {
      id: 5,
      title: "Deep Work",
      author: "Cal Newport",
      price: 449,
      image:
        "https://cdn.shopify.com/s/files/1/0648/3066/9017/products/hachette-uk-books-default-title-deep-work-rules-for-focused-success-in-a-distracted-world-paperback-newport-cal-paperback-newport-cal-40359324254425_360x.jpg?v=1775394876"
    }
  ];

  return (
    <main>

      {/* ================= HERO ================= */}
      <section className="booknook-hero">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6">

              <span className="hero-small-text">
                WELCOME TO BOOKNOOK
              </span>

              <h1>
                Discover Your Next
                <span> Great Read</span>
              </h1>

              <p>
                Explore a carefully curated collection of books,
                from timeless classics to exciting new arrivals.
              </p>

              <div className="hero-buttons">

                <Link
                  to="/products"
                  className="btn booknook-primary-btn"
                >
                  Explore Books
                </Link>

                <Link
                  to="/products?category=Fiction"
                  className="btn booknook-outline-btn"
                >
                  Browse Categories
                </Link>

              </div>

            </div>

            <div className="col-lg-6">

              <div className="hero-books">

                <div className="floating-book book-one">
                  📕
                </div>

                <div className="floating-book book-two">
                  📗
                </div>

                <div className="floating-book book-three">
                  📘
                </div>

                <div className="hero-circle">
                  📚
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CATEGORIES ================= */}
      <section className="booknook-section">

        <div className="container">

          <div className="section-heading">

            <span>EXPLORE</span>

            <h2>Shop by Category</h2>

            <p>
              Find something you'll love from our carefully
              selected collections.
            </p>

          </div>


          <div className="row g-4">

            {categories.map((category) => (

              <div
                className="col-lg-3 col-md-6"
                key={category.title}
              >

                <Link
                  to={category.link}
                  className="category-card"
                >

                  <div className="category-icon">
                    {category.icon}
                  </div>

                  <h3>{category.title}</h3>

                  <p>{category.description}</p>

                  <span className="category-arrow">
                    Explore →
                  </span>

                </Link>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= FEATURED BOOKS ================= */}
      <section className="booknook-section featured-section">

        <div className="container">

          <div className="section-heading">

            <span>POPULAR PICKS</span>

            <h2>Bestselling Books</h2>

            <p>
              Discover what other readers are loving right now.
            </p>

          </div>


          <div className="row g-4">

            {featuredBooks.map((book) => (

              <div
                className="col-xl-3 col-lg-3 col-md-6"
                key={book.id}
              >

                <div className="book-card">

                  <Link to={`/products/${book.id}`}>

                    <div className="book-image">

                      <img
                        src={book.image}
                        alt={book.title}
                      />

                    </div>

                  </Link>


                  <div className="book-info">

                    <div className="book-rating">
                      ⭐ {book.rating}
                    </div>

                    <h3>{book.title}</h3>

                    <p>{book.author}</p>

                    <div className="book-bottom">

                      <strong>
                        ₹{book.price}
                      </strong>

                      <button className="add-cart-small">
                        +
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>


          <div className="text-center mt-5">

            <Link
              to="/products"
              className="btn booknook-primary-btn"
            >
              View All Books
            </Link>

          </div>

        </div>

      </section>


      {/* ================= NEW ARRIVALS ================= */}
      <section className="booknook-section">

        <div className="container">

          <div className="section-heading">

            <span>JUST ARRIVED</span>

            <h2>New Arrivals</h2>

            <p>
              Fresh titles waiting to become your next favorite.
            </p>

          </div>


          <div className="row g-4">

            {newArrivals.map((book) => (

              <div
                className="col-xl-3 col-lg-3 col-md-6"
                key={book.id}
              >

                <div className="book-card">

                  <Link to={`/products/${book.id}`}>

                    <div className="book-image">

                      <img
                        src={book.image}
                        alt={book.title}
                      />

                    </div>

                  </Link>


                  <div className="book-info">

                    <h3>{book.title}</h3>

                    <p>{book.author}</p>

                    <div className="book-bottom">

                      <strong>
                        ₹{book.price}
                      </strong>

                      <button className="add-cart-small">
                        +
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= AUTHORS ================= */}

      <section className="authors-section">

        <div className="container">

          <div className="authors-heading text-center">

            <span>
              BOOKNOOK AUTHORS
            </span>

            <h2>
              Meet the Authors
            </h2>

            <p>
              Discover the talented writers behind
              the stories and ideas you love.
            </p>

          </div>


          <div className="row g-4 justify-content-center">

            {authors.map((author) => (

              <div
                className="col-6 col-md-4 col-lg-2"
                key={author.id}
              >

                <div className="author-card">

                  <div className="author-image">

                    <img
                      src={author.image}
                      alt={author.name}
                    />

                  </div>

                  <h4>
                    {author.name}
                  </h4>

                  <p>
                    {author.genre}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="booknook-cta">

        <div className="container text-center">

          <h2>
            A Good Book Can Change Everything.
          </h2>

          <p>
            Take a break, pick a book, and discover a new world.
          </p>

          <Link
            to="/products"
            className="btn booknook-cta-btn"
          >
            Start Exploring
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Home;