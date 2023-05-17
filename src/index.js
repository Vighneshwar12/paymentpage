import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import img1 from "./img/Icon 1.png"
import img2 from "./img/Icon 2 (1).png"
import img3 from "./img/Vector (3).png"
import img4 from "./img/Frame 12537.png"
import img5 from "./img/Group 20.png"
import img6 from "./img/Group 19.png"
import img7 from "./img/Group 16.png"
import img8 from "./img/Group 17.png"
import img9 from "./img/Group 15.png"
import img10 from "./img/EDYODA.png"
import img11 from "./img/Search Icon.png"




function Main(){
  return(
    <>
    <Head/>
    <Container/>
    
    </>
  )

}
function Head(){
  return(
    <>
    
    <header>
    <div>
      <img src={img10} id="icon1" alt=""/>
      
      <select id="icon2">
        <option>courses</option>
        <option>java</option>
        <option>python</option>
      </select>
      <select id="icon2">
        <option>programs</option>
        <option>java</option>
        <option>python</option>
      </select>
      <img src={img11} id="icon3" alt=""/>
      <p id="icon4">Log in</p>
      <p id="icon5">JOIN NOW</p>
      
    </div>
    </header>
    
    
  </>
  )
}
function Container(){
  return(
    <>
    <div>
      <p id="one"></p>
      
        <p id="two">
          <Content/>
        </p>
        <div>
          <Note/>
        </div>

        </div>
      
    
    
  </>
    
  )
}
function Content(){
  return(
    <>
      <img src={img1} id="three" alt=""/>
      <img src={img2} id="four"  alt=""/>
      <br></br>
      <span style={{paddingLeft:95}}>Sign Up</span>
      <span style={{paddingLeft:229}}>Subscribe</span>
      <p id="five"><b>Select your subscription plan</b></p>
      <Form/>
  </>
  )
}
function Form(){
  const validate=()=>{
    
    const color=document.getElementById("six")
    
    color.style.borderColor="red"
    
  
}
const noValid=()=>{
  const color=document.getElementById("six")
  color.style.borderColor="#BEBEBE"
}
const validate1=()=>{
    
  const color=document.getElementById("twelve")
  
  color.style.borderColor="red"
  

}
const noValid1=()=>{
const color=document.getElementById("twelve")
color.style.borderColor="#BEBEBE"
}
const validate2=()=>{
    
  const color=document.getElementById("eighteen")
  
  color.style.borderColor="red"
  

}
const noValid2=()=>{
const color=document.getElementById("eighteen")
color.style.borderColor="#BEBEBE"
}

  
  return(
    <>
    <div id="six" onClick={validate} onMouseLeave={noValid}>
      
      <p id="seven">Offer expired</p>
      <input id="eight" type="radio" name="fill"/>
      <p id="nine"><b>12 Months Subscription</b></p>
      <p id="ten"><b>Total ₹99</b></p>
      <p id="eleven"><b>₹8 /mo</b></p>
      
      

    </div>
    <div id="twelve" onClick={validate1} onMouseLeave={noValid1}>
      
      <p id="thirteen">Recommended</p>
      <input id="fourteen" type="radio" name="fill"/>
      <p id="fifteen"><b>12 Months Subscription</b></p>
      <p id="sixteen"><b>Total ₹179</b></p>
      <p id="seventeen"><b>₹15 /mo</b></p>
      
      

    </div>
    <div id="eighteen" onClick={validate2} onMouseLeave={noValid2}>
      
      
      <input id="twenty" type="radio" name="fill"/>
      <p id="tone"><b>12 Months Subscription</b></p>
      <p id="ttwo"><b>Total ₹149</b></p>
      <p id="tthree"><b>₹25 /mo</b></p>
      
      

    </div>
    <div id="eighteen" onClick={validate2} onMouseLeave={noValid2}>
      
      
      <input id="twenty" type="radio" name="fill"/>
      <p id="tone"><b>12 Months Subscription</b></p>
      <p id="ttwo"><b>Total ₹99</b></p>
      <p id="tthree"><b>₹33 /mo</b></p>
      
      

    </div> 
    

    <div id="tfour">
      <pre id="tfive">Subscription Fee                             ₹18,500</pre>
      <p id="tsix"></p>
      <p id="tseven"><b>Limited time offer</b></p>
      <p id="teight"><b>-₹18,401</b></p>
      <img src={img3} id="tnine" alt=""/>       
      <p id="aone">Offer valid till 25th March 2023</p>
      <p id="atwo"><b>Total</b>(incl. of 18% GST)</p>
      <p id="athree" ><b>₹149</b></p>
      </div>
      <span><button id="afour">CANCEL</button></span>
      <span><button id="afive">SUBMIT</button></span>
      <img src={img4} id="asix" alt=""/>
    </>
  )
}
function Note(){
  return(
    <>
    <p id="aseven"><b>Access curated course worth
      ₹<strike id="aeight">18,500</strike> at just <span id="anine" >₹99</span> per year!
      </b>
    </p>
    <div>
    <img src={img5} id="bone" alt=""/>
    <p id="btwo"><b><span id="bthree">100+</span>Job revevant courses</b></p>
    </div>
    <div>
    <img style={{marginTop:30}} src={img6} id="bone" alt=""/>
    <p id="bfour"><b><span id="bfive">20,000+</span>Hours of content</b></p>
    </div>
    <div>
    <img style={{marginTop:30}} src={img7} id="bone" alt=""/>
    <p id="bfour"><b><span id="bfive">Exclusive</span>webinar access</b></p>
    </div>
    <div>
    <img style={{marginTop:30}} src={img8} id="bone" alt=""/>
    <p id="bfour"><b>Scholarship worth <span id="bfive">₹94,500</span></b></p>
    </div>
    <div>
    <img style={{marginTop:30}} src={img9} id="bone" alt=""/>
    <p id="bfour"><b><span id="bfive">Ad Free</span>learning experience</b></p>
    </div>
   </>
  )
}













ReactDOM.render(<Main />,document.getElementById("root"))

