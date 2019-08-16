import React from 'react'

const ProductHeader = (props) => {
    const {updateFilterValue} = props
    return (
        <div>
            <div className="hero-container">
                <h1 className="hero-heading">Products & Services</h1>
                <p className="hero-paragraph">Try out our Beyond plan and also check out our album prices!</p>
            </div>
            <div className="filter-styles">
                <p> Filter Artist:</p>
                <select className="filters" onChange={updateFilterValue}>
                    <option value="none">None</option>
                    <option value="cole">J. Cole</option>
                    <option value="drake">Drake</option>
                    <option value="logic">Logic</option>
                    <option value="calvin">Calvin Harris</option>
                    <option value="beyond">Horizon Beyond</option>
                </select>
                <p>Filter Price</p>
                <select className="sort">
                    <option value="None">None</option>
                    <option value="high">High to Low</option>
                    <option value="low">Low to High</option>
                </select>
            </div>
        </div>
    )
}

export default ProductHeader