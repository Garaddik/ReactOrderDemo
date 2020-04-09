import React, {Component} from 'react'
import {Switch,Route} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
import ProductListConnector from './connectors/ProductListConnector'
import OrdersConnector from './connectors/OrderConnector'
import Home from './components/Home'
import Phones from './components/Phones'
import './App.css'

export default class App extends Component{
  render(){
    return(
      <div>
        <BrowserRouter>
        <Switch>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/phones" component={Phones} />
                <Route path="/products" component={ProductListConnector} />
                <Route path="/orders" component={OrdersConnector} />
            </Switch>
          </Switch>
        </BrowserRouter>
    </div>
    )
  }
}