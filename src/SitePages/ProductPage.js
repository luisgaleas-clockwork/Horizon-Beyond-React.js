import React from 'react';
import ProductHeader from '../Components/Products/HeaderProducts';
import ProductBeyond from '../Components/Products/ProductBeyond';
import JCole from '../Components/Products/JCole';
import Drake from '../Components/Products/Drake';
import Logic from '../Components/Products/Logic';
import CalvinHarris from '../Components/Products/Calvin-Harris';
import products from "../products.json";
import sortby from 'sort-by'

class Product extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            productCole: products.cole,
            productDrake: products.drake,
            productLogic: products.logic,
            productCalvin: products.calvin,
            show: false,
            changeArtist: "",
            updateFilterValue: "none",
            updatePrice: "none"
        }
        this.updateFilterValue = (e) => {
            console.log('VALUE CHANGED', e.target.value)
            this.setState({ updateFilterValue: e.target.value }, () => {
                console.log('HEY, IM INSIDE THE CALLBACK AFTER SETSTATE', this.state.updateFilterValue)
            })
        }
        this.updatePrice = () => {
            this.state.productCole.sort(sortby('-price'))
            this.state.productDrake.sort(sortby('-price'))
            this.state.productLogic.sort(sortby('-price'))
            this.state.productCalvin.sort(sortby('-price'))
            console.log("OKKKURR")
        }
    }

    render() {
        return (
            <div>
                <ProductHeader updateFilterValue={this.updateFilterValue} updatePrice={this.updatePrice} />
                <ProductBeyond state={this.state} name="beyond" />
                <JCole state={this.state} name="cole" />
                <Drake state={this.state} name="drake" />
                <Logic state={this.state} name="logic" />
                <CalvinHarris state={this.state} name="calvin" />
            </div>
        )
    }
}

export default Product