import React,{Component,} from 'react';
import './header.css'
import {Link,withRouter} from 'react-router-dom'

const url = "https://developerjwt.herokuapp.com/api/auth/userinfo";

class Header extends Component {

    constructor(){
        super();

        this.state={
            userData:'',
            username:''
        }
    }
      

    handleLogout = () => {
        sessionStorage.removeItem('userinfo');
        sessionStorage.setItem('loginStatus',false);
        sessionStorage.removeItem('ltk');
        this.props.history.push('/')
    }
        conditionalHeader = () => {

            if(sessionStorage.getItem('ltk')){
                let data = this.state.userData;
                let outArray = [data.name, data.email, data.phone, data.role];
                sessionStorage.setItem('userinfo',outArray);
                sessionStorage.setItem('loginStatus',true)
                return(
                <>
                <div className="btnlogin">
                    <Link to="/" className="btn btn-success">
                        <span className="glyphicon glyphicon-user"></span> Hi {data.name}
                    </Link> &nbsp;
                    <button onClick={this.handleLogout} className="btn btn-danger">Logout</button>
                </div>
            </>
        )
     }else{

              return(
                    <>
                      <Link to="/" className="info"><span>Home</span>
                       </Link>  &nbsp;
                        <Link to="/about us" className="info">
                       <span>About Us</span>
                      </Link>    &nbsp; <Link to="/login" className="btn btn-success">
                         <span className="glyphicon glyphicon-log-in"></span> Login</Link> &nbsp;
                         <Link to="/register" className="btn btn-info">
                            
                     <span className="glyphicon glyphicon-user"></span> Register</Link>            
                    </>
                )
            }

            }
                   
    
        render(){
            return(
                <div className="penal">
                     <div id="search">
                           <div className="container1">Taste of </div>
                            <div className="container2">Kashmir</div> 
                         <div id="boot">
                             {this.conditionalHeader()}
                         </div>
                      </div>   
                  </div>
               
            )
        }
        //api calling
        componentDidMount(){
            fetch(url,{
                method: 'GET',
                headers:{
                    'x-access-token':sessionStorage.getItem('ltk')
                }
            })
            .then((res) =>  res.json())
            .then((data) => {
                this.setState({
                    userData:data
                })
            })
        }
    }


export default  withRouter(Header)

// <Link to="/" className="info"><span>Home</span>
// </Link>  &nbsp;
// <Link to="/about us" className="info">
// <span>About Us</span>
// </Link>    &nbsp;
// <Link to="/login" className="btn btn-success">
//  <span className="glyphicon glyphicon-log-in"></span> Login
// </Link> &nbsp;
//     <Link to="/register" className="btn btn-info">
//         <span className="glyphicon glyphicon-user"></span> Register
//     </Link>  
/////
// return ( 
//     <div className="penal">
//       <div id="search">
//           <div className="container1">Taste of </div>
//             <div className="container2">Kashmir</div> 
//         <div id="boot">
//             {this.conditionalHeader()}
//         </div>
//      </div>   
//  </div>
// )
