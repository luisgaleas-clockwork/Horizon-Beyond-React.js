import React from 'react'
import ProductItem from '../Utility/Products-Sections'

const CalvinHarris = (props) => {
  const { state, name } = props
  if (state.updateFilterValue === "none" || name === state.updateFilterValue) {
    return (
      <div>
        <div className="featured-artist calvin-harris">
          <div className="img-group calvin-harris-img"><img
            src="https://66.media.tumblr.com/66fb647c2b76873a91ae59f34ef18bf4/tumblr_oo9mhyCAk51vl7x77o1_1280.png"
            alt="Image of artist calvin harris" />
          </div>
          <div className="featured-artist-content">
            <div className="text-group align-right">
              <h2>Featured Artist</h2>
              <h3 className="artist-title">Calvin Harris</h3>
              <p>From the retro-centric vibes of debut album I Created Disco, to spearheading the American EDM
                explosion
                with third album 18 Months - which brought a succession of global hits including Feel So Close
                and GRAMMY
                award winning We Found Love, to his most recent conceptual LP Funk Wav Bounces Vol. 1 - which
                paired the
                Scottish heavyweight alongside Frank Ocean, Migos, Pharrell Williams, Ariana Grande and Nicki
                Minaj
                amongst
              a who’s who of musical luminaries</p>
            </div>
            <div className="artist-albums-product">
              <div className="albumcover-product">
                <div className="row image-cover-container">
                  <div className="col-md image-cover">
                    <a href="#Funk-Wav"><img className="shadow p-3 mb-5 bg-white"
                      src="https://format-com-cld-res.cloudinary.com/image/private/s--7IqjzyFl--/c_limit,g_center,h_400,w_65535/a_auto,fl_keep_iptc.progressive,q_95/v1/f136e97a35dd648aedf494452956ee77/CALVIN_HARRIS_FUNK_WAV_BOUNCES_VOL1_1500x1500.jpg"
                      alt="CALVIN_HARRIS_FUNK_WAV_BOUNCES_VOL1" /></a>
                  </div>
                  <div className="col-md image-cover">
                    <a href="#Motion"><img className="shadow p-3 mb-5 bg-white "
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Calvin_Harris_-_Motion.png/220px-Calvin_Harris_-_Motion.png"
                      alt="Calvin Harris Motion album" /></a>
                  </div>
                  <div className="col-md image-cover" id="Funk-Wav">
                    <a href="#18-Months"><img className="shadow p-3 mb-5 bg-white Ac3"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Calvin_Harris_-_18_Months.png/220px-Calvin_Harris_-_18_Months.png"
                      alt="Calvin harris 18 months album" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {state.productCalvin.map(calvinP => {
            return (<ProductItem key={calvinP.id} products={calvinP} />
            )
          })}
        </div>
      </div>
    )
  }
  else {
    return null
  }
}

export default CalvinHarris