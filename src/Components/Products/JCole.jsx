import React from 'react'
import ProductItem from '../Utility/Products-Sections'
import sortby from 'sort-by'

const JCole = (props) => {
  const { state, name, price } = props
  console.log('hi im working', name, state.updateFilterValue)
  if (state.updateFilterValue === "none" || name === state.updateFilterValue) {
    return (
      <div>
        <div className="featured-artist">
          <div className="featured-artist-content">
            <div className="text-group jcole-text-group">
              <h2>Featured Artist</h2>
              <h3 className="artist-title">J. Cole</h3>
              <p>Jermaine Lamarr Cole is an MC and producer who has achieved phenomenal success over the last few
                years, a result
                of the long hours he spent grinding hard on the mixtape scene and sharing songs on internet forums. Since
                signing to Jay Z’s Roc Nation, he has toured worldwide, sold huge amounts of records, produced for
                Kendrick
                Lamar and even come to the attention of Barack Obama.</p>
            </div>

            <div className="artist-albums-product">
              <div className="albumcover-product">
                <div className="row image-cover-container">
                  <div className="col-md image-cover">
                    <a href="#Forest-hill"><img className="shadow p-3 mb-5 bg-white "
                      src="http://foothillertech.com/student/webdesign/2017/fan4/projects/teamFan/assets/images/2014forestHillsdrive.jpg"
                      alt="j.cole 2014 forest hill drive cover in which his is stilling a top of a house roof" /></a>
                  </div>
                  <div className="col-md image-cover">
                    <a href="#Forest-hill"><img className="shadow p-3 mb-5 bg-white "
                      src="https://i.ebayimg.com/images/g/EesAAOSwnHZYdDgy/s-l300.jpg"
                      alt="j.coles born sinner ablum which is a metalic delish figure" /></a>
                  </div>
                  <div className="col-md image-cover Ac3" id="Forest-hill">
                    <a href="#Forest-hill"><img className="shadow p-3 mb-5 bg-white "
                      src="https://images.rapgenius.com/3cgkifu1zzc0hjclvad6k1tov.1000x1000x1.jpg"
                      alt="j.coles album cole world which features him siting in a locker room" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="img-group"><img
            src="https://www.sccpre.cat/mypng/full/269-2699394_j-cole-black-and-white-stencil-png-download.png"
            alt="icon of j.cole" />
          </div>
        </div>
        <div>
          {state.updatePrice === 'None' ||  price === state.updatePrice ?
          state.productCole.sort(sortby('price')).map(coleP => {
            return (<ProductItem key={coleP.id} products={coleP} />
            )
          })
          :
          state.productCole.sort(sortby('-price')).map(coleP => {
            return (<ProductItem key={coleP.id} products={coleP} />
            )
          })
        }
        </div>
      </div>
    )
  }
  else {
    return (
      null
    )
  }
}

export default JCole