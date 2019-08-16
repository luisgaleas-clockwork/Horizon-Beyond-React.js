import React from "react"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container footer">
        <div className="row">
          <div className="col-md social">
            <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
          </div>
          <div className="col-md social">
            <a href="https://www.instagram.com/luisi.g__/"><i className="fab fa-instagram"></i></a>
          </div>
          <div className="col-md social">
            <a href="https://twitter.com/?lang=en"><i className="fab fa-twitter"></i></a>
          </div>
          <div className="col-md social">
            <Link to="/contact"><i className="fas fa-phone"></i></Link>
          </div>
        </div>
      </div>
      <p>&copy; Luis Galeas, 2019</p>
    </footer>
  )
}
export default Footer