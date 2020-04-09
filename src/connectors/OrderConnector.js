import {connect} from 'react-redux'
import Orders from '../components/order/Orders'
import {fetchOrders} from '../actions/actions'

function mapStateToProps(state){
  return{
    orders: state.orders,
    actions:{
        fetchOrders:fetchOrders
    }
  } 
}

export default connect(mapStateToProps)(Orders)
