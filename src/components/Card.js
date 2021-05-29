import React from 'react';
import '../style.css'




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

            products :this.props.product,
            // image_url : "./"+this.props.product.image_name
        }
    
        console.log(this.state.products);
        
        
    }
    
    render(){

      let img_url = `/images/${this.state.products.image_name}`
        return(

           <>
        
<div className="card">
  <div className="card-body">

    <div className="card-title"><h5>{this.state.products.name}</h5></div>
    {/* <h6>{this.state.products.brand}</h6> */}
   
    <img class="img-fluid w-100" src={img_url} alt="Sample"/>
    {console.log("./"+this.state.products.image_name)}
    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ab. Delectus, provident nesciunt
      asperiores,</p> */}
    <p>Availabilty :{this.state.products.available? "Yes" : "No" }</p>
    <p className="text-success">Price : Rs.{this.state.products.price}</p>
    <button type="button" class="btn btn-primary btn-sm">Add to Cart</button>

  </div>
</div>
           </>


        )
    }

}

export default Card;