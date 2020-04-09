import React,{Component} from 'react'
import HeaderImage from '../../assets/header.PNG'
import ItemImage from '../../assets/item6.jpg'

class Orders extends Component{
    
    constructor(props){
        super(props)
    }

    componentDidMount(){
        const {dispatch,actions} = this.props
        dispatch(actions.fetchOrders())
        
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
                        this.props.orders.map((order, index) => {
                                return(
                                    <div key={index}>
                                        <h2 className="horizontal-line-css">Order Number: {order.id} </h2>
                                        {
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
