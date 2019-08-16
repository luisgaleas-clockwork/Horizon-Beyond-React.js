import React from 'react'
import { Link } from 'react-router-dom'
const DrakeAd = () => {
    return (
        <section>
            <div className="jumbotron jumbo-home d-flex" id="FeatureAlbums">
                <div className="artist">
                    <img src="http://www.pngmart.com/files/8/Drake-PNG-Transparent-Photo.png" alt="Image of artist drake" />
                </div>
                <div className="albumgroup">
                    <h3 className="display-4-home ">Featured Artist</h3>
                    <p className="lead artist-name">Drake</p>
                    <p className="lead">Canadian rapper and vocalist Drake sustained a high-level commercial presence shortly after he
                      hit
                      the scene in 2006, whether with his own chart-topping releases or a long string of guest appearances on hits
                      by
                      the likes of Lil Wayne, Rihanna, and A$AP Rocky. Thanks to his introspective rap style, his sensitive R&B
                      crooning, and his gold-touch songwriting, each one of his albums -- from 2011's Take Care to 2018's Scorpion
                      --
                      topped charts worldwide, and his singles, like the Grammy-winning "Hotline Bling," and many mixtapes did as
            well.</p>
                    <Link className="btn btn-primary btn-lg btn-color" to="/products" role="button">Learn more</Link>
                </div>
            </div>
        </section>
    )
}

export default DrakeAd