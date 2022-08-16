import React from 'react';
import Search from './searchComponent';
import QuickSearch from './quickComponent';
import QuickSearch1 from './quickComponent1';
import QuickSearch2 from './quickComponent2';
import './home.css';



const Home = (Props) => {

    return(
       <>
          

           <div id="heading">
                      <img src="https://i.ibb.co/VTh989V/background2.jpg" alt=""></img>
                      <p>Where tradition meets wood fire</p>  
                      <Search/>
                    </div>
          
          
            <div id="special">
                <h2>Today's Special </h2>
       
         <div className="content1"> 
           <div className= "div-img">
              <img src="https://i.ibb.co/J7WFGN2/pizza3.jpg" alt="pizza3" border="0"></img>
            </div>
          <div className="discription">
              <h3>Chicken Blast Pizza</h3>
                <p id="oldprice"><del> old price:Rs 270</del></p>
                 <p id="new price"> New price :Rs 200 </p>
                    <button type="button" className="btn-bt">Add To Cart</button>
          </div>
    </div>
         <div className="content1">
          <div className= "div-img">
            <img src="https://i.ibb.co/Xx9b2LT/roganjosh2.jpg" alt="roganjosh2" border="0"></img>
            </div>
            <div class="discription">
              <h3>Rogan Josh</h3>
              <p id="oldprice"><del> old price:Rs 500</del></p>
              <p id="new price"> New price :Rs 400</p>
              <button type="button" className="btn-bt">Add To Cart</button>
          </div>
         </div>
         <div className="content1">
          <div className= "div-img">
            <img src="https://i.ibb.co/SPSDMV8/biryani.jpg" alt="biryani" border="0"></img>
            </div>
            <div className="discription">
              <h3>Biryani</h3>
              <p id="oldprice"><del> old price:Rs 250</del></p>
              <p  id="new price"> New price :Rs 200 </p>
              <button type="button" className="btn-bt">Add To Cart</button>
          </div>
         </div>
     </div>
      

     <div id="Kashmiriwazwan">
       <div className="content">
           <span className="dc"> kashmiri wazwan </span>
           <p> Multi-course meal in Kashmiri cuisine</p>
           <a href="listing.html"><button className="crook">View All</button></a>
       </div>
         <div id="clue">
          <img src="https://i.ibb.co/VS0zpWJ/rista.jpg" alt="rista" border="0"></img>
         </div>
    </div>
    <QuickSearch/>
    
    
      {/* <link to ={`/listing/${''}}`}> */}
     {/* <div id="recipe">
        <a href="listing.html"><div className="recipe1">
         <img src="https://i.ibb.co/vBNH0PS/seekh-kabab.webp" alt="seekh-kabab" border="0"></img>
         <p>Seekh Kabab</p></div></a>
        <a href="listing.html"><div className="recipe1">
          <img src="https://i.ibb.co/1Rww10s/yakhni.jpg" alt="yakhni" border="0"></img>
          <p>Yakhni</p></div></a>
        <a href="listing.html"><div className="recipe1">
          <img src="https://i.ibb.co/16fnRk1/tabak-maaz.jpg" alt="tabak-maaz"></img>
          <p>Tabakh Maaz</p></div></a>
        <a href="listing.html"><div className="recipe1">
          <img src="https://i.ibb.co/SNQ7ctT/korma.webp" alt="korma" border="0"></img>
          <p>Korma</p></div></a>
        <a href="listing.html"><div className="recipe1">
         <img src="https://i.ibb.co/RPwvkh8/roganjosh2.jpg" alt="roganjosh2" border="0"></img>
          <p>Rogan Josh</p></div></a>
      </div> */}
    {/* </link> */}
    
          <div id="Franchise">
               <div className="content">
                 <span className="dc"> Pizza </span>
                     <p className="prag"> You can't buy happiness but you can buy pizza  </p>
                      <button  className="crook">View All</button>
               </div>
               <div id="clue2">
               <img src="https://i.ibb.co/mNKKvnZ/background3.jpg" alt="background3" border="0"></img>
                 </div>
          </div>
          <QuickSearch1/>
         
          
   
    {/* <div id="recipe">
      <a href="listing1.html"><div className="recipe1">
        <img src="https://i.ibb.co/VJjHsfB/background3.jpg" alt="background3" border="0"></img>
        <p>Chicken cheeza</p></div></a>
      <a href="listing1.html"><div className="recipe1">
        <img src="https://i.ibb.co/sKbQSHP/biryani.jpg" alt="biryani" border="0"></img>
        <p>Biryani</p></div></a>
      <a href="listing1.html"><div className="recipe1">
        <img src="https://i.ibb.co/Zdvqnpc/blast.jpg" alt="blast" border="0"></img>
        <p>Chicken Blast</p></div></a>
      <a href="listing1.html"><div className="recipe1">
        <img src="https://i.ibb.co/MhDMTbS/Nonveg-burger.jpg" alt="Nonveg-burger" border="0"></img>
        <p>Burger</p></div></a>
      <a href="listing1.html"><div className="recipe1">
        <img src="https://i.ibb.co/Cz4V3Sv/momos.jpg" alt="momos" border="0"></img>
        <p> Fried Momos</p></div> </a>
  </div> */} 
     

  <div id="Coffee">
      <div className="content">
        <span className="dc"> Coffee </span>
        <p>Coffee with a friend is like capturing happiness in a cup</p>
        <button className="crook">View All</button>
    </div>
      <div id="clue3">
      <img src="https://i.ibb.co/p0ZJL1L/coffee.jpg" alt="coffee" border="0"></img>
      </div>
 </div> 
 <QuickSearch2/>
 
 {/* <link to ={`/listing/${item.mealtype_id}`} key={item._id}> */}
   {/* <div id="recipe">
      <a href="listing2.html"><div className="recipe1">
          <img src="https://i.ibb.co/jDDtpqm/coldcoffee.jpg" alt="coldcoffee" border="0"></img>
          <p>Cold Coffee</p></div></a>
       <a href="listing2.html"><div className="recipe1">
               <img src="https://i.ibb.co/BG0ZnK2/hotcoffee.jpg" alt="hotcoffee" border="0"></img>
               <p>Hot Coffee</p></div></a>
        <a href="listing2.html"><div className="recipe1">
                <img src="https://i.ibb.co/hDkvT6n/americano.webp" alt="americano" border="0"></img>
                <p>Americano</p></div></a>
         <a href="listing2.html"><div className="recipe1">
                <img src="https://i.ibb.co/3WxrZf5/espresso.webp" alt="espresso" border="0"></img>
                <p>Espresso</p></div></a>
          <a href="listing2.html"><div className="recipe1">
                <img src="https://i.ibb.co/9s6v1d1/cortado.jpg" alt="cortado" border="0"></img>
                <p>Cortado</p></div></a>
      </div> */}
      {/* </link> */}
           </> 
           
    )
}


export default Home