import React from 'react'
import { Link } from 'react-router-dom'

const MusicAd = () => {
    return (
        <section>
            <div className="jumbotron jumbo-home d-flex" id="album-sale">
                <div className="sale-group">
                    <h3 className="display-4-home">More than +100 albums and songs</h3>
                    <p className="lead ">From Pop to Hip-Hop. Horizon offers every genre and much more. It is up to you how you use
                      this
            power. Explore from our many collections.There is something always in store fro you here in Horizon</p>
                    <Link className="btn btn-primary btn-lg btn-color" to="/products" role="button">Learn more</Link>
                </div>
                <div className="sale-logo ">
                    <i className="fas fa-play"></i>
                </div>
            </div>
        </section>
    )
}
export default MusicAd