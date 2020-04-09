import fetch from 'isomorphic-fetch'
import {GETORDERS,POSTORDERS, PRODUCTS} from './actionType'
import data from '../assets/data/productlist.json';
import ordersJSON from '../assets/data/orderlist.json';

const API_URL = "http://localhost:8080";

function recieveOrders(json){
    return {
        type: GETORDERS,
        orders: json
    }
}

let headers = new Headers({
    'Access-Control-Allow-Origin':'*',
    'content-type': 'application/json' 

})


export function createOrder(cartList){
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cartList)
    };

    return fetch(API_URL+`/orders`, requestOptions)
    .then(response => {
      return response.status
    })
}

function client_fetchOrders(){
    return dispatch => {
        return fetch(API_URL+`/orders`,
        {
            headers: headers
        }
        )
        .then(response => {
          return response.json()
        })
        .then(json => dispatch(recieveOrders(json)))
    }
}

function recieveProducts(){
    return {
        type: PRODUCTS,
        products: data
    }
}


export function fetchProducts(){
    return dispatch =>{
        return dispatch(recieveProducts())
    }
}

export function fetchOrders(){
    return dispatch =>{
        return dispatch(client_fetchOrders)
    }
}

export function createOrders(data){
    return dispatch =>{
        return dispatch({})
    }
}