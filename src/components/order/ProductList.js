import React,{Component} from 'react'
import HeaderImage from '../../assets/header.PNG'
import CartImage from '../../assets/cart.png'
import Product from './Product'
import Cart from './Cart'

export default class ProductList extends Component{
    constructor(props){
        super(props)

        this.state={
            products: this.props.products,
            cartList:[],
            size:0,
            showCart:false
        }
        this.showCart=this.showCart.bind(this)
        this.addToCart = this.addToCart.bind(this)
        this.removeItemFromCart = this.removeItemFromCart.bind(this)
        this.createOrder = this.createOrder.bind(this)
        this.showOrders = this.showOrders.bind(this)
    }

    createOrder(){

        let payload = {
            "products":this.state.cartList
        }

        const {actions} = this.props
        var response = actions.createOrder(payload)

        response.then(response => {
            this.props.history.push("/orders")
        })
        .catch(error => {
            this.props.history.push("/orders")
        })
    }

    showCart(){
        this.setState({
            showCart: !this.state.showCart
        })
    }

    showOrders(){
        this.props.history.push("/orders")
    }
    addToCart(data){
        
        var cartList = this.state.cartList
        cartList.push(data)

        this.setState({
            cartList: cartList,
            size: cartList.length
          });
    }

    componentDidMount(){
        const {dispatch,actions} = this.props
        dispatch(actions.fetchProducts())
        
    }

    removeItemFromCart(data){

        let index = -1;

        var cartList = this.state.cartList

        cartList.forEach(function (value, ind) {
            if(value.productNumber === data.productNumber) {
             index =  ind;
             return false;
            }
        });
       cartList.splice(index, 1);

       this.setState({
           cartList
       })
    }

    render(){
        return(
            <div>
                <div className = "header-css">
                  <img src={HeaderImage} alt="Header" />
                </div>  

                <div class = "cart-css" >
                    <u onClick={() => this.showOrders()} >My Orders</u>
                    {
                        this.state.showCart && 
                        <button onClick = {()=> this.createOrder()}>Create order</button>
                    }
                    <img src={CartImage} alt="Cart Icon" onClick={() => this.showCart()}/> <span className="cart-count-css" id="cart-count-css">{this.state.cartList.length}</span>    
                </div>
                <div  className="card-list" >
                    {
                            !this.state.showCart  &&
                            this.props.products.map((data,index) =>{
                                return  <Product data={data} key={index} addToCart={this.addToCart} ></Product>
                            }, this)
                    }

                    {
                            this.state.showCart  &&
                            this.state.cartList.map((data,index) =>{
                                return  <Cart data={data} key={index} removeItemFromCart={this.removeItemFromCart} ></Cart>
                            }, this)
                    }
                </div>
            </div>
        )
    }
}