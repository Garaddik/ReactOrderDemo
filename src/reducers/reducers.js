import { combineReducers } from 'redux'
import products from './ProductListReducer'
import orders from './OrdersReducer'

const rootReducer = combineReducers({
    products,
    orders
})
   
export default rootReducer