import React from 'react';
import '../style.css'
import phone_img from './Samsung-Galaxy-J2-2015.jpg'



class Card extends React.Component{

    constructor(props){

        super(props)
        this.state={

            
            // _id : this.props._id,
            // name : this.props.name,
            // price : this.props.price,
            // brand : this.props.brand,
            // type : this.props.type,
            // available : this.props.available,

            products :this.props.product
        }
    
        console.log(this.state.products);
    }
    
    render(){

        return(

           <>
         
<div className="card">
  <div className="card-body">

    <h5>{this.state.products.name}</h5>
    {/* <h6>{this.state.products.brand}</h6> */}
    <img class="img-fluid w-100" src={phone_img} alt="Sample"/>
    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ab. Delectus, provident nesciunt
      asperiores,</p> */}
    <p>Availabilty :{this.state.products.available? "Yes" : "No" }</p>
    <p className="text-success">Price : Rs.{this.state.products.price}</p>
    <button type="button" class="btn btn-primary btn-md">Add to Cart</button>

  </div>
</div>
           </>


        )
    }

}

export default Card;