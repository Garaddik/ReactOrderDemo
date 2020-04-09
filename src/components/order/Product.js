import React,{Component} from 'react'
import ItemImage from '../../assets/item6.jpg'


class Product extends Component{

    constructor(props){
        super(props)
        this.addToCartChild = this.addToCartChild.bind(this)
    }

    addToCartChild(data){
        this.props.addToCart(data)
    }
    
    render(){

        const data = this.props.data    
        return(
            <div className="card" >
                                    <img src={ItemImage} alt="Image Not Available"/>
                                    <h2>{data.name}</h2>
                                    <p className="price">£{data.price}</p>
                                    <p>{data.specification}</p>
                                    <p><button onClick={() =>this.addToCartChild(data)}>Add to Cart</button></p>
            </div>
        )
    }
}

export default Product