import React from 'react';
import '../style.css'
import ProductDescription from './Product-description';
import {Link} from 'react-router-dom';
import {Button} from "react-bootstrap";
import MyVerticallyCenteredModal from './Example';




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
            
            cartItems :[],
            // image_url : "./"+this.props.product.image_name
           modalShow : false
        }
    
       
        
        
    }

    
    
    render(){

      let img_url = `/images/${this.state.products.image_name}`
      const linkToDesc = {
        pathname : `/product_desc/${this.state.products._id}`,
        id : this.state.products._id
      }

      const linkToCart ={
        pathname : `/Cart`,
        id : this.state.products._id
      }
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
    
    <br></br><p>Availabilty :{this.state.products.available? "Yes" : "No" }</p>
    <p className="text-success">Price : Rs.{this.state.products.price}</p>
    
    
    <Link to= {linkToDesc} className="text text-primary" >View</Link><br></br>
    <div>
    <Link to={linkToCart} className="btn btn-primary btn-sm" id="addToCart">Add to Cart</Link>
    </div><br></br>
    <div>
      <Button variant="outline-primary btn-sm" onClick={() => this.setState({modalShow : true})} block>
        Know More
      </Button>

      <MyVerticallyCenteredModal
        show={this.state.modalShow}
        onHide={() =>  this.setState({modalShow : false})}
        name = {this.state.products.name}
        price = {this.state.products.price}
        desc = {this.state.products.description}
      />
    </div>
  </div>
</div>
           </>


        )
    }

}

export default Card;