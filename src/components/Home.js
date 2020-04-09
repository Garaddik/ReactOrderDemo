import React,{Component} from 'react'
import HomeImage from '../assets/home.PNG'

class Home extends Component{

    constructor(props){
        super(props)

        this.navigateToPhones = this.navigateToPhones.bind(this)
    }

    navigateToPhones(){
        this.props.history.push("/phones")
    }

    render(){

        return(
            <div>
                <img onClick={this.navigateToPhones} src={HomeImage} alt="Products and Services" />
            </div>
        )
    }
}

export default Home;