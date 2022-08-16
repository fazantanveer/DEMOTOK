import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './header';
import Home from './component/home/home';
import Listing from'./component/listing/listing';
import Details from'./component/details/menuDetails';
import PlaceOrder from './component/booking/placeOrder';
import ViewOrder from './component/booking/viewOrder';
import Slider from'./component/home/slider';
import Footer from './footer';
import Login from './component/login/login';
import Register from './component/login/register';



const Routing = () =>{
    return(
      <BrowserRouter>
           <Header/>
             <Route exact path="/" component={Home}/>
             <Route  path="/listing/:id" component={Listing}/>
             <Route  path="/details" component={Details}/>
             <Route path="/placeOrder/:restaurant_id" component={PlaceOrder}/>
             <Route path="/viewOrder" component={ViewOrder}/>
             <Route path="/login" component={Login}/>
             <Route path="/register" component={Register}/>
             <Slider/>
           <Footer/>
      </BrowserRouter>
    )
}



export default Routing