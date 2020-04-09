import {PRODUCTS} from '../actions/actionType'

const ProductListReducer = (state=[], action)=> {
    switch(action.type){
        case PRODUCTS:
            return action.products
        default:
            return state    
    }
}

export default ProductListReducer