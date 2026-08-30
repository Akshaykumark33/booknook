import { Link } from "react-router-dom";

function About() {
  return (
    <main className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container text-center">

          <span className="about-label">
            ABOUT BOOKNOOK
          </span>

          <h1>
            A Cozy Corner for Every Reader
          </h1>

          <p>
            Discover stories, knowledge, and inspiration
            from our carefully selected collection of books
            and stationery.
          </p>

        </div>
      </section>


      {/* Our Story */}
      <section className="about-section">
        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-6">

              <div className="about-icon">
                📚
              </div>

              <h2>
                Our Story
              </h2>

              <p>
                BookNook was created with a simple idea:
                to make discovering and shopping for books
                an enjoyable experience.
              </p>

              <p>
                From timeless classics and fiction to
                self-help, children's books, and useful
                stationery, BookNook brings everything
                together in one welcoming place.
              </p>

            </div>


            <div className="col-lg-6">

              <div className="about-story-card">

                <div>
                  <span>📖</span>
                  <h4>Discover</h4>
                  <p>
                    Explore books from different categories
                    and genres.
                  </p>
                </div>

                <div>
                  <span>💡</span>
                  <h4>Learn</h4>
                  <p>
                    Find knowledge and inspiration for
                    everyday life.
                  </p>
                </div>

                <div>
                  <span>❤️</span>
                  <h4>Enjoy</h4>
                  <p>
                    Build your own collection of books
                    you love.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* Mission */}
      <section className="about-mission">

        <div className="container text-center">

          <span className="about-label">
            OUR MISSION
          </span>

          <h2>
            Making Reading More Accessible
          </h2>

          <p>
            Our mission is to create a simple, friendly,
            and convenient online bookstore where readers
            can discover books that match their interests
            and bring them home with ease.
          </p>

        </div>

      </section>


      {/* Categories */}
      <section className="about-categories">

        <div className="container">

          <div className="text-center mb-5">

            <span className="about-label">
              WHAT WE OFFER
            </span>

            <h2>
              Something for Every Reader
            </h2>

          </div>


          <div className="row g-4">

            <div className="col-md-6 col-lg-3">

              <div className="about-category-card">
                <span>📕</span>
                <h4>Fiction</h4>
                <p>
                  Novels, romance, fantasy, mystery,
                  and more.
                </p>
              </div>

            </div>


            <div className="col-md-6 col-lg-3">

              <div className="about-category-card">
                <span>📘</span>
                <h4>Non-Fiction</h4>
                <p>
                  Self-help, biographies, business,
                  science, and history.
                </p>
              </div>

            </div>


            <div className="col-md-6 col-lg-3">

              <div className="about-category-card">
                <span>🧒</span>
                <h4>Children's Books</h4>
                <p>
                  Fun and educational books for
                  young readers.
                </p>
              </div>

            </div>


            <div className="col-md-6 col-lg-3">

              <div className="about-category-card">
                <span>✏️</span>
                <h4>Stationery</h4>
                <p>
                  Notebooks, pens, art supplies,
                  and desk accessories.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="about-cta">

        <div className="container text-center">

          <h2>
            Find Your Next Favorite Book
          </h2>

          <p>
            Explore the BookNook collection today.
          </p>

          <Link
            to="/products"
            className="about-btn"
          >
            Explore Books
          </Link>

        </div>

      </section>

    </main>
  );
}

export default About;