import React from 'react';
import './footer.css';

const footer = (Props) =>{
     return(
       <React.Fragment>

        <div className="footer">
          <div className="container-conn">
            <div className="row">
              <div className="col-lg-4 col-sm-4 col-xs-12">
                <div className="single_footer">
                  <h4>Services</h4>
                  <ul>
                       <li><a href="#">Refund after cancel orders</a></li>
                        <li><a href="#">Online Delevery</a></li>
                        <li><a href="#">24/7 Available</a></li>
                  </ul>

                </div>

                </div>

           
         
         <div className="col-lg-4 col-sm-4 col-xs-12">
                <div className="single_footer single_footer_address">
                  <h4>Page Link</h4>
                  <ul>
                       <li><a href="#">listing</a></li>
                        <li><a href="#">See Orders</a></li>
                        <li><a href="#">CheckOut</a></li>
                  </ul>

                </div>

              </div>

            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="single_footer single_footer_address">
                <h4>Subscribe</h4>
                <div className="signup_form">
                  <form action="#" className="subscribe">
                    <input type="text" className="subscribe__input" placeholder="Enter Email Address"/>
                      <button type="button" className="btn btn-primary" id="button">Enter</button>
                             {/* <button type="button" className="btn btn-primary" id="button"><centre>Enter</centre></button> */}
                  </form>

                </div>


              </div>

            </div>
  

          {/* <div className="social_profile">
                 <ul>
                  <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                  <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                 </ul>
            </div>  */}

                <div id="social">
                  <h4>Follow Us</h4>
                
                   <a href="https://www.facebook.com/" target="_blank">
                        <img src="https://i.ibb.co/dtzG625/facebook.png" alt="fb" className="slogo"/>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src="https://i.ibb.co/19H5LvT/insta.png" alt="fb" className="slogo"/>
                    </a>
                    <a href="https://www.youtube.com/" target="_blank">
                        <img src="https://i.ibb.co/w07K2Vn/youtube1.png" alt="fb" className="slogo"/>
                    </a>
                    
            </div>
             </div>

          </div>

        </div>
  


                 
      {/* <div className="footer">
            <div className="container">
                  <div class="row">
                   <div class="footer-col">
                        <h6>Company</h6>
                   <ul>
                        <li><a href="#"> About us</a></li>
                        <li><a href="#">Our Services</a></li>
                        <li><a href="#">Team</a></li>
                   </ul>
                   </div>
             <div className="footer-col">
              <h6>Contact Us</h6>
                <ul>
                  <li><a href="#">Email:ToK@gmail.com</a></li>
                  <li><a href="#"> phone:+912134567890</a></li>
                  <li><a href="#">Help & Support</a></li>
                </ul>
            </div>
            <div className="footer-col">
              <h6>Legals</h6>
                <ul>
                  <li><a href="#">Terms & Conditions</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Refund & Cancellation</a></li>
                </ul>
            </div>


             
            <div className="footer-col">
              <h6>Follow us</h6>
              <div id="social">
                    <a href="https://www.facebook.com/" target="_blank">
                        <img src="https://i.ibb.co/dtzG625/facebook.png" alt="fb" className="slogo"/>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src="https://i.ibb.co/19H5LvT/insta.png" alt="fb" className="slogo"/>
                    </a>
                    <a href="https://www.youtube.com/" target="_blank">
                        <img src="https://i.ibb.co/w07K2Vn/youtube1.png" alt="fb" className="slogo"/>
                    </a>
            </div>
              
              <span id="created">Developed by Fazan </span>
          </div>   
      </div>  
   </div> 
  </div> */}
      
       </React.Fragment>
     )
}


export default footer