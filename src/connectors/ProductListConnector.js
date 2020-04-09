import {connect} from 'react-redux'
import ProductList from '../components/order/ProductList'
import {createOrders,fetchProducts, createOrder} from '../actions/actions'

function mapStateToProps(state){
  return{
    products: state.products,
    actions:{
        createOrders: createOrders,
        fetchProducts: fetchProducts,
        createOrder:createOrder
    }
  } 
}

export default connect(mapStateToProps)(ProductList)
