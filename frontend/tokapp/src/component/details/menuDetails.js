import React,{Component} from 'react';
import axios from 'axios';
import './details.css';
import {Link} from 'react-router-dom';
import MenuDisplay from './menuDisplay';



const url = "https://restnodeapis.herokuapp.com"

class MenuDetails extends Component {
    constructor(props){
        super(props)

        this.state={
            details:'',
            menuList:'',
            userItem:'',
            mealId:sessionStorage.getItem('mealId')?sessionStorage.getItem('mealId'):'1'
        }
    }

    addToCart = (data) => {
        this.setState({userItem:data})
    }

    proceed = () => {
        sessionStorage.setItem('menu', this.state.userItem);
        this.props.history.push(`/placeOrder/${this.state.details.restaurant_id}`)
    }


    render(){
        //let details = this.state.details
        let {details} = this.state 
        return(
            <>
               
                <div id="mainContent">
                    <div className="imgDiv">
                        <img src={this.state.details.menu_image} alt="wazwan"/>
                    </div>
                    <div className="contentDiv">
                        <h1>{details.menu_name}</h1>
                        <span>231 Customers Rating is very Good</span>
                        <h4><del>Old Price:500</del></h4>
                        <h4>New Price:{details.menu_price}</h4>
                        <h4>Test Food with Refreshing Taste</h4>
                         <div className="feature_container">
                            <div className="feature">
                                <img src="https://i.ibb.co/wJvrhYg/veg.png" alt="veg" className="imgIcon"/>
                                <p>Pure Non Veg</p>
                            </div>
                           
                            <div className="feature">
                                <img src="https://i.ibb.co/kHrm3Mh/delivery.png" alt="veg" className="imgIcon"/>
                                <p>Free Delivery</p>
                            </div>
                        </div>
                        <h2>Currently Open</h2>
                        <div>
                            <Link to="/" className="btn btn-danger ">Back</Link> &nbsp;
                            <button className="btn btn-success" onClick={this.proceed}>CheckOut</button>
                        </div>
                </div>

     </div>    
               <div className="col-md-12">
                    <MenuDisplay menuData={this.state.menuList}/>
                 
                </div>  
      </>
    
        )
    }
////api calling
    async componentDidMount(){
        let restId= this.props.location.search.split('=')[1];
        let response = await axios.get(`${url}/details/${restId}`)
        console.log(">>>>",response.data)
        let menu = await axios.get(`${url}/menu/${restId}`)
        this.setState({details:response.data[0],menuList:menu.data})
    }
}



export default MenuDetails;