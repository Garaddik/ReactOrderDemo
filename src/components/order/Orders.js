import React,{Component} from 'react'
import HeaderImage from '../../assets/header.PNG'
import ItemImage from '../../assets/item6.jpg'
import fetch from 'isomorphic-fetch'
import {API_URL} from './../../actions/actionType'

class Orders extends Component{
    
    constructor(props){
        super(props)
        this.state={
            orders:[]
        }
    }

    componentDidMount(){
        const {dispatch,actions} = this.props
        fetch(API_URL+`/api/v1/orders`,
        {
            headers: headers
        }
        )
        .then(response => {
            this.setState({
                orders: this.state.orders
            })
        })
        .then(error =>{
            console.log("API call error")
        })
    }

    render(){
        return(
            <div>
                <div className = "header-css">
                  <img src={HeaderImage} alt="Header" />
                </div>  
                <h2 className="orderlist-css">Order List</h2>
                
                <div className="card-list" id="cards" >
                    {
                        this.state.orders && 
                        this.state.orders.map((order, index) => {
                                return(
                                    <div key={index}>
                                        <h2 className="horizontal-line-css">Order Number: {order.id} </h2>
                                        {   order.products && 
                                            order.products.map((item,ind) => {
                                                return(
                                                    <div className="card" key={ind}>
                                                    <img src={ItemImage} alt="Image Not Available" />
                                                    <h2>{item.name}</h2>
                                                    <p className="price">£{item.price}</p>
                                                    <p>{item.specification}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                        }, this)
                    }
                </div>
            </div>
        )
    }
}

export default Orders
