import React,{Component} from 'react';
import axios from 'axios';
import './listing.css';
import ListingDisplay from './listingDisplay';


const url = "https://restnodeapis.herokuapp.com/restaurantmenu";


class Listing extends Component {

    constructor(props){
        super(props)


        this.state={

            restaurantmenu:""
        }
    }

    render(){
        return(

            <>
              
              <div className="menuhead"><span>Tok</span>  Menu</div>
              <div className="row">
                <div className="mainListing">
                    <ListingDisplay listData={this.state.restaurantmenu}/>       
                       </div>
                
                </div>
             </>
         )
     }


    //calling api with axios 
componentDidMount(){
    let mealId = this.props.match.params.id?this.props.match.params.id:1;
    sessionStorage.setItem('mealId',mealId);
    axios.get(`${url}?mealtype_id=${mealId}`)
        .then((res) => {this.setState({restaurantmenu:res.data})})
}
}




export default Listing