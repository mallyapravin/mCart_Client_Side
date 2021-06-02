import axios from 'axios';
import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';

class Cart extends React.Component {

    constructor(props) {

        super(props);
        this.state = {

            cartItems: JSON.parse(localStorage.getItem("cartItems")) ? JSON.parse(localStorage.getItem("cartItems")) : []

        }

    }

    componentDidMount() {

        axios.get(`http://localhost:8000/mCart/products/${this.props.location.id}`)
            .then(res => {
                let item = res.data.data.products;
                this.addtoCart(item)
            })
            .catch(error => console.log("error is : " + error))

    }

    addtoCart = (item) => {


        this.setState({
            cartItems: [...this.state.cartItems, item]
        });

        localStorage.setItem("cartItems", JSON.stringify(this.state.cartItems));

        // localStorage.clear();

    }

    // Quick test
    print = (val) => {
        console.log(val)

        return <h4>val</h4>

    }


    render() {

        let cartItems = this.state.cartItems
        // console.log("In cart items:" + cartItems[0][0].name)

        return (
            <>
            <div className="cart-title"><h1>Your Cart</h1></div>
            
                <>
                
                <div className="container">
                {Object.keys(cartItems).length}

                    {

                        Object.keys(cartItems).map((itemNum, index) => (

                            <>

                                <div className="card" id="cart-row">
                                <div className="row">
                                    <div className="col" id="item-name">
                                        <h4>{cartItems[itemNum][0].name}</h4>
                                        <div>
                                            <img class="img-fluid" id="item-image" src={`/images/${cartItems[itemNum][0].image_name}`} alt="Sample" />
                                        </div>
                                    </div>
                                    {/* <div className="col"></div> */}
                                    <div className="col" >
                                        <div className="item-price"><text className="text">Rs. {cartItems[itemNum][0].price}</text></div>
                                        <div className="item-desc"> {cartItems[itemNum][0].description}</div>
                                        <div className="cart-button"><Link to="#" className="btn btn-danger btn-sm" id="addToCart">Remove</Link></div>
                                        
                               
                                    </div>
                                   </div> 
                            </div>    
                                </>

                            ))


                        }


            </div>
            </>









                {/* {
                    
                    cartItemsArr.map((item , index)=>(

                        <h1 key={index}>{item}</h1>
                    )
                        
                    )
                } */}

        {/* {console.log(cartItemsArr)} */ }
            </>
        )

    }



}

export default Cart;