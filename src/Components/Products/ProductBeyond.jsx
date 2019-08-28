import React from 'react'


const ProductBeyond = (props) => {
  const { state, name } = props
  if (state.updateFilterValue === "none" || name === state.updateFilterValue) {
    return (

      <section className="beyond-ad beyond-filter none">
        <div className="beyond-ad-text">
          <h2>Horizon Beyond</h2>
          <div className="p-text"></div>
          <p>Get Horizon Beyond and listen to unlimited music</p>
          <p>The Things That You Can Really See Lies Beyond The Horizon.</p>
          <p>Only $10 per month</p>
        </div>
        <div className="beyond-icon-blue">
          <img src="https://www.shareicon.net/download/2015/12/07/683856_arrow_512x512.png" alt="horizon beyond logo" />
        </div>
      </section>
    )
  }
  else {
    return null
  }
}

export default ProductBeyond