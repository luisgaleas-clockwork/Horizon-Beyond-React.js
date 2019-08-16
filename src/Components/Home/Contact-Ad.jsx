import React from "react"
import { Link } from 'react-router-dom'

const ContactAd = () => {
    return (
        <section>
            <div className="jumbotron jumbo-home d-flex" id="Contact">
                <div className="contact-group">
                    <h3 className="display-4-home ">Contact Us</h3>
                    <p className="lead ">If you have any questions or concerns about our service. Feel free to contact us. We will
                      gladly
            answer any questions that you may have.</p>
                    <Link className="btn btn-primary btn-lg btn-color" to="/contact" role="button">Learn more</Link>
                </div>
                <div className="contact-logo ">
                    <i className="fas fa-comments"></i>
                </div>
            </div>
        </section>
    )
}

export default ContactAd 