import React from 'react';
import Navbar from './components/Navbar';
import './style.css'; // Ensure your main app CSS is imported here

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container my-5 mt-5 pt-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Welcome to Myntra Points Program!</h1>
            <p className="lead">Join our community of fashion enthusiasts and earn points every time you share your Myntra fashion finds. Share your style, inspire others, and get rewarded with exclusive points that you can use to purchase your next favorite outfit!</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold buttonhtml">Get Started</button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img className="rounded-lg-3" src="./img1.png" width="350px" alt="Welcome" />
          </div>
        </div>
      </div>

      <div className="container px-4" id="hanging-icons">
        <h2 className="pb-2 border-bottom fw-bold">How It Works:</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-bag-check" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
              </svg>
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Purchase</h3>
              <p>Explore Myntra's vast collection and choose your favorite items. Complete your purchase to start earning points.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-upload" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
              </svg>
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Post</h3>
              <p>Upload a photo or video of you wearing your new outfit on any social media platform mentioned below.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-cash-coin" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0" />
                <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.646c-.043-.584-.514-1.038-1.317-1.103v-.447h-.375v.443c-.825.057-1.314.529-1.314 1.153 0 .594.375.893 1.008 1.04l.296.07v1.237c-.432-.052-.7-.323-.752-.646h-.671zm2.364-.774c0 .329-.218.568-.625.61v-1.133c.432.104.625.34.625.523zm-2.802-6.11a6.98 6.98 0 0 0-2.287-.69C7.433 2.586 7.493 1.303 7.493 1h-1c0 .302-.067 1.586-1.22 2.22a6.98 6.98 0 0 0-2.287.69 5.999 5.999 0 0 0-2.97-.803 1.5 1.5 0 0 0-1.5 1.5v6a1.5 1.5 0 0 0 1.5 1.5h.035c.464 1.011 1.43 1.766 2.592 1.766.881 0 1.68-.402 2.209-1.035a2.976 2.976 0 0 0 4.418 0 2.976 2.976 0 0 0 2.209 1.035c1.162 0 2.128-.755 2.592-1.766H15a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-1.5-1.5 5.999 5.999 0 0 0-2.97.803zm-1.25 1.196a6.005 6.005 0 0 0-1.555-.537C8.982 3.966 9.33 3.293 9.494 2.5c.5.36.899.907 1.256 1.607zm-3.708-.537a6.005 6.005 0 0 0-1.555.537c.357-.7.756-1.247 1.256-1.607.163.793.511 1.466.299 2.462zm-4.036 4.447h1.5a1.5 1.5 0 1 1 0 1h-1.5a.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5zm5.5.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .5.5zM3.74 6.15a6.975 6.975 0 0 0-1.24 1.364 6.975 6.975 0 0 0-1.24-1.364 5.02 5.02 0 0 1 2.48 0zM2 13V7.496a5.03 5.03 0 0 1 2 1.292A5.03 5.03 0 0 1 6 7.496V13a2 2 0 1 1-4 0zm5.44-2.056a2.982 2.982 0 0 0-1.207-1.047v-1.24a5.993 5.993 0 0 1 1.207.292v2.006zm1.246-2.36a5.993 5.993 0 0 1 1.207-.292v1.24a2.982 2.982 0 0 0-1.207 1.047V8.584zM11 13V7.496a5.03 5.03 0 0 1 2 1.292A5.03 5.03 0 0 1 15 7.496V13a2 2 0 1 1-4 0zM6.26 6.15c.357.7.756 1.247 1.256 1.607-.163-.793-.511-1.466-.299-2.462a6.005 6.005 0 0 0-1.555.537zm7.75 0a6.975 6.975 0 0 0-1.24 1.364 6.975 6.975 0 0 0-1.24-1.364 5.02 5.02 0 0 1 2.48 0zM11 4.503c-.356-.7-.756-1.247-1.256-1.607.163.793-.137 1.466-.299 2.462a6.005 6.005 0 0 0 1.555-.537z" />
              </svg>
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Earn</h3>
              <p>Get points based on the number of views your post receives. Use these points for discounts on future purchases.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
