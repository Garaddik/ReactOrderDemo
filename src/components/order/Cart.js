import React,{Component} from 'react'
import ItemImage from '../../assets/item6.jpg'


class Cart extends Component{

    constructor(props){
        super(props)
        this.removeItemFromCart = this.removeItemFromCart.bind(this)
    }

    removeItemFromCart(data){
        this.props.removeItemFromCart(data)
    }

    render(){

        const data = this.props.data    
        return(
            <div className="card" >
                                    <img src={ItemImage} alt="Image Not Available"/>
                                    <h2>{data.name}</h2>
                                    <p className="price">£{data.price}</p>
                                    <p>{data.specification}</p>
                                    <p><button onClick={() =>this.removeItemFromCart(data)}>Remove from Cart</button></p>
            </div>
        )
    }
}

export default Cart