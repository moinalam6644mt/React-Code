import React from 'react';
import '../style/home.css';

function Home() {
  return (
    <div className="card mt-2 text-center bg-black">
      <div className="">
        <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-interval="10000">
              <img src="../style/download.jpg" className="d-block w-100" alt="First slide" />
            </div>
            <div className="carousel-item" data-interval="2000">
              <img src="../style/download.jpg" className="d-block w-100" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img src="../style/download.jpg" className="d-block w-100" alt="Third slide" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-target="#carouselExampleInterval" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-target="#carouselExampleInterval" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div class="card text-center">
          <div class="card-header">
            Featured
          </div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
          <div class="card-footer text-muted">
            2 days ago
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
