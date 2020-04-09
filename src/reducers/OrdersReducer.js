import {GETORDERS} from '../actions/actionType'

const OrdersReducer = (state=[], action)=> {
    switch(action.type){
        case GETORDERS:
            return action.orders
        default:
            return state    
    }
}

export default OrdersReducer