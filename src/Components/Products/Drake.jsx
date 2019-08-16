import React from 'react';
import ProductItem from '../Utility/Products-Sections'
import sortby from 'sort-by'

const Drake = (props) => {
  const {state, name} = props
  if (state.updateFilterValue === "none" || name === state.updateFilterValue) {
  return (
    <div>
      <div className="featured-artist drake">
        <div className="img-group drake-img"><img src="http://www.pngmart.com/files/8/Drake-PNG-Transparent-Photo.png"
          alt="Image of artist Drake" />
        </div>
        <div className="featured-artist-content">
          <div className="text-group align-right">
            <h2>Featured Artist</h2>
            <h3 className="artist-title">Drake</h3>
            <p>Canadian rapper and vocalist Drake sustained a high-level commercial presence shortly after he
              hit the
              scene in 2006, whether with his own chart-topping releases or a long string of guest appearances
              on hits
              by
              the likes of Lil Wayne, Rihanna, and A$AP Rocky. Thanks to his introspective rap style, his
              sensitive R&B
              crooning, and his gold-touch songwriting, each one of his albums.</p>
          </div>
          <div className="artist-albums-product">
            <div className="albumcover-product">
              <div className="row image-cover-container">
                <div className="col-md image-cover">
                  <a href="#Take-care"><img className="shadow p-3 mb-5 bg-white"
                    src="https://images.genius.com/a50b0608affc94c4dae3d502a65ea390.1000x1000x1.jpg"
                    alt="Drake album Take care" /></a>
                </div>
                <div className="col-md image-cover">
                  <a href="#Too-late"><img className="shadow p-3 mb-5 bg-white "
                    src="https://i.scdn.co/image/d329671363eb7826b5871eef978841c7db97c757"
                    alt="If your are reading this its too late" /></a>
                </div>
                <div className="col-md image-cover" id="Take-care">
                  <a href="#Views"><img className="shadow p-3 mb-5 bg-white Ac3"
                    src="https://i.pinimg.com/originals/1b/51/06/1b5106393526a842e816d7304da38d70.jpg"
                    alt="Views by drake" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>

        {state.productDrake.sort(sortby('price')).map(drakeP => {
          return (<ProductItem key={drakeP.id} products={drakeP} />
          )
        })}
      </div>
    </div>
  )}
  else{ return null}
}

export default Drake;