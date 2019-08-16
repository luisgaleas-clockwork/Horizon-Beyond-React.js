import React from 'react'
import { Link } from 'react-router-dom'
const Beyond = () => {
    return (
        <section>
            <div className="jumbotron jumbo-home d-flex" id="beyond">
                <div className="beyond-group">
                    <h3 className="display-4 ">Horizon Beyond</h3>
                    <p className="lead ">Tired of ads poping up while you listen your favorite music? Upgrade to Horizon Beyond.</p>
                    <p className="lead ">With Horizon Beyond you can:</p>
                    <ul>
                        <li>Listen to unlimited music</li>
                        <li>Buy albums for a discount to listen offline</li>
                        <li>Listen to Horizon on any platform</li>
                        <li>Get the Latest deal on concerts</li>
                        <li>Listen to the newest and latest releases</li>
                    </ul>
                    <Link className="btn btn-primary btn-lg btn-color" to="/products" role="button">Learn more</Link>
                </div>
                <div className="beyond-logo ">
                    <img src="https://www.shareicon.net/download/2015/12/07/683856_arrow_512x512.png" alt="horizon beyond logo" />
                </div>
            </div>
        </section>
    )
}

export default Beyond