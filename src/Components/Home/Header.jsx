import React from 'react'

const Heading = () => {
  return (
    <header>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100"
              src="https://images.unsplash.com/photo-1496858705185-1f25b056e4a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              alt="people at a concert" />
            <div className="carousel-caption d-none d-md-block">
              <h1>Welcome to Horizon</h1>
              <p>The place where music lives free.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100"
              src="https://images.unsplash.com/photo-1505964253539-4ca5a36328dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1936&q=80"
              alt="City scape of the city toronto" />
            <div className="carousel-caption d-none d-md-block">
              <h2>Drake's Origin: Toronto, Canada</h2>
              <p>Listen to "Views" from drake out now!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100"
              src="https://images.unsplash.com/photo-1488779382325-da88fd3175e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
              alt="Hallway with a neon question" />
            <div className="carousel-caption d-none d-md-block">
              <h2>Contact Us</h2>
              <p>Ask us any questions. We are always willing to fullfil your needs</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </header>
  )
}

export default Heading

