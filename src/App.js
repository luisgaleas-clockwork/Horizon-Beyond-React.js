import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
//Ecommerce Pages
import IndexPage from './SitePages/IndexPage'
import Product from './SitePages/ProductPage'
import Contact from './SitePages/ContactPage'
import NavBar from './Components/Utility/Navbar'
import Footer from './Components/Utility/Footer'
//css
import './App.css'
//bootstrap validation
import './Components/bootstrapValidation'

function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Route exact path="/" component={IndexPage} />
                <Route exact path="/products" component={Product} />
                <Route exact path="/contact" component={Contact} />
                <Footer />

            </div>
        </Router>
    )
}

export default App