import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './style.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary mb-5 gradient-background">
          <div className="container-fluid gradient-background">
            <Link className="navbar-brand" to="/"><img src="./myn.png" height="30" alt="Myntra Logo" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.google.co.in/">Men</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.google.co.in/">Women</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.google.co.in/">Kids</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.google.co.in/">Customise</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>

        <section className="pt-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-bold">Get Your Account Verified</h1>
              <p className="lead text-body-secondary">Ensure your posts are eligible for redeeming discounts by verifying your social media profile. This quick process links your account with Myntra, allowing us to track views and award points accurately.</p>
              <p>
                <Link to="#" className="btn btn-primary mt-2">Verify Now</Link>
              </p>
            </div>
          </div>
        </section>

        <div className="container px-4 mb-5" id="hanging-icons">
          <h2 className="pb-2 border-bottom d-flex gap-2 justify-content-center">Coupons Available:</h2>
        </div>

        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-5">
              <div className="col mt-3">
                <div className="card shadow-sm">
                  <img src="./1.jpg" alt="Coupon 1" />
                  <div className="card-body">
                    <p className="card-text">10% discount on your next Myntra purchase. Save on the latest trends and styles!</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary mybutton1">Unlock Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img src="./2.jpg" alt="Coupon 2" />
                  <div className="card-body">
                    <p className="card-text">20% off on your next order. Perfect for those big shopping sprees!</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary mybutton1">Unlock Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img src="./3.jpg" alt="Coupon 3" />
                  <div className="card-body">
                    <p className="card-text">30% discount on select categories. Refresh your wardrobe with incredible savings!</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary mybutton1">Unlock Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mt-5">
                <div className="card shadow-sm">
                  <img src="./4.jpg" alt="Coupon 4" />
                  <div className="card-body">
                    <p className="card-text">40% discount on your purchases. Save big while shopping for your favorite styles!</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary mybutton1">Unlock Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mt-5">
                <div className="card shadow-sm">
                  <img src="./5.jpg" alt="Coupon 5" />
                  <div className="card-body">
                    <p className="card-text">50% discount on your favorite brands. Get ready to elevate your fashion game!</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Unlock Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mt-5">
                <div className="card shadow-sm">
                  <img src="./6.jpg" alt="Coupon 6" />
                  <div className="card-body">
                    <p className="card-text">60% discount on exclusive collections. Indulge in styles at unbeatable prices!</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Unlock Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="py-1 pt-5 gradient-background">
          <div className="container mt-5">
            <div className="row">
              <div className="col-6 col-md-2 mb-3">
                <h5>General</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Home</Link></li>
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Features</Link></li>
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Cookie Policy</Link></li>
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">About</Link></li>
                </ul>
              </div>
              <div className="col-6 col-md-2 mb-3">
                <h5>Legal</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Legal</Link></li>
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Privacy</Link></li>
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Terms</Link></li>
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Social</Link></li>
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Intellectual Property</Link></li>
                </ul>
              </div>
              <div className="col-6 col-md-2 mb-3">
                <h5>Properties</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Destinations</Link></li>
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Press Room</Link></li>
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Promo Code</Link></li>
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Tech Blog</Link></li>
                </ul>
              </div>
              <div className="col-md-5 offset-md-1 mb-3">
                <form>
                  <h5>Subscribe to our newsletter</h5>
                  <p>Monthly digest of what's new and exciting from us.</p>
                  <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                    <button className="btn btn-primary" type="button">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
              <p>© 2024 Myntra, Inc. All rights reserved.</p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3"><Link className="link-body-emphasis" to="#"><i className="bi bi-twitter"></i></Link></li>
                <li className="ms-3"><Link className="link-body-emphasis" to="#"><i className="bi bi-instagram"></i></Link></li>
                <li className="ms-3"><Link className="link-body-emphasis" to="#"><i className="bi bi-facebook"></i></Link></li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
