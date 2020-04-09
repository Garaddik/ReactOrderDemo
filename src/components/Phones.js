import React,{Component} from 'react'
import PhoneImage from '../assets/phone.png'

class Phones extends Component{

    constructor(props){
        super(props)
        this.navigateToPhones=this.navigateToPhones.bind(this)
    }

    navigateToPhones(){
        this.props.history.push("/products")
    }

    render(){
        return(
            <img onClick={this.navigateToPhones} src={PhoneImage} alt="Phones" />
        )
    }
}

export default Phones