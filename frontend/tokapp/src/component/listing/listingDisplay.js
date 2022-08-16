import React from 'react';
import {Link} from 'react-router-dom';


const ListingDisplay = (props) => {
   
    const renderData = ({listData}) => {
        if(listData){
            if(listData.length>0){
                return listData.map((item) => {
                    return(
                        <div className="item" key={item.menu_id}>
                            <div className="row">
                                <div className="col-md-12">
                                    <img src={item.menu_image} className="Image"
                                    alt={item.menu_name}></img>
                                </div>
                                <div className="col-md-12">
                                    <div className="hotel_name">
                                        <Link to={`/details?menu_id=${item.menu_id}`} className="link">
                                            {item.menu_name}
                                        </Link>
                                        <div className="city_name">{item.menu_type}</div>
                                        <div className="city_name">{item.description}</div>
                                        <div className="city_name1">Rs.{item.menu_price}</div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                })

            }else{
                return(
                    <div>
                        <h2>No Data For the Filter</h2>
                    </div>
                )
            }
        }else{
            return(
                <div class="loader">
                    <img src="/images/loader.gif" alt="loader"/>
                    <h2>Loading....</h2>
                </div>
            )
        }
    }

    return(
        <div id="content">
            {renderData(props)}
        </div>
    )
}

export default ListingDisplay