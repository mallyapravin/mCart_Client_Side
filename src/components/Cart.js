import axios from 'axios';
import React, { useEffect } from 'react';

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

    // getcartItems = (cartItems) => {

    //     const values = Object.values(cartItems);

    //     values.forEach(val=>

    //          typeof val === "object" ? this.getcartItems(cartItems) : this.print(val)

    //     )

    // }


    //     visit = (obj, fn) => {
    //         const values = Object.values(obj)

    //         values.forEach(val => 
    //             val && typeof val === "object" ? this.visit(val, fn) : fn(val))
    //     }

    // Quick test
    print = (val) => {
        console.log(val)

        return <h4>val</h4>

    }


    render() {

        let cartItems = this.state.cartItems
        // console.log("In cart items:" + cartItems[0][0].name)
        let cartItemsArr = []
        return (
            <>


                <h1>This is my cart</h1>
                {this.props.location.id}
                {
                    <ul>{
                        
                        Object.keys(cartItems).map((itemNum, index) => (

                            <li>{cartItems[itemNum][0].name}</li>
                        ))
                        
                        
                        }</ul>

                    
                }
                {/* {
                    
                    cartItemsArr.map((item , index)=>(

                        <h1 key={index}>{item}</h1>
                    )
                        
                    )
                } */}

                {/* {console.log(cartItemsArr)} */}
            </>
        )

    }



}

export default Cart;