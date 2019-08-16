import React from 'react'
import ProductItem from '../Utility/Products-Sections'

const Logic = (props) => {
  const { state, name } = props
  if (state.updateFilterValue === "none" || name === state.updateFilterValue) {
  return (
    <div>
      <div className="featured-artist">
        <div className="featured-artist-content">
          <div className="text-group logic-text-group">
            <h2>Featured Artist</h2>
            <h3 className="artist-title">Logic</h3>
            <p>The stylistically dynamic and voluble Logic launched his rap career through uploads and
              mixtapes prior to
              signing a Def Jam deal that fostered a sustained mainstream presence throughout the second half
              of the
              2010s. The MC, singer, songwriter, and producer made his recording debut in 2009 and five years
              later hit
              the Top Five with his debut album, Under Pressure (2014), the first of several conceptual
              full-length
          projects to enter the Billboard 200 and rap charts within the upper reaches. </p>
          </div>
          <div className="artist-albums-product">
            <div className="albumcover-product">
              <div className="row image-cover-container">
                <div className="col-md image-cover">
                  <a href="#Under-pressure"><img className="shadow p-3 mb-5 bg-white "
                    src="https://steamuserimages-a.akamaihd.net/ugc/911288131852721604/3A561AEF770A49CFF7DE0C00B9177BF232903CFD/"
                    alt="logic album Under Pressure" /></a>
                </div>
                <div className="col-md image-cover">
                  <a href="#Bobby-tarintino"><img className="shadow p-3 mb-5 bg-white "
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Logic_-_Bobby_Tarantino_%28album_cover%29.jpg/220px-Logic_-_Bobby_Tarantino_%28album_cover%29.jpg"
                    alt="logic album Bobby Tarintino" /></a>
                </div>
                <div className="col-md image-cover" id="Under-pressure">
                  <a href="#Incredible"><img className="shadow p-3 mb-5 bg-white Ac3"
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/TheIncredibleTrueStory.jpg/220px-TheIncredibleTrueStory.jpg"
                    alt="logic album The Incredible True Story" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="img-group logic-img"><img
          src="https://www.seekpng.com/png/detail/174-1749260_logic-rapper-png-logic-rapper-2017.png"
          alt="Image of the rapper logic" />
        </div>
      </div>
      <div>
        {state.productLogic.map(logicP => {
          return (<ProductItem key={logicP.id} products={logicP} />
          )
        })}
      </div>
    </div>
  )}
  return null
}

export default Logic