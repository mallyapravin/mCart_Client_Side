import axios from 'axios';
import React from 'react';
import {Link} from 'react-router-dom';

class ProductDescription extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            id: this.props.match.params.id,
            products: "",
        }
    }

    componentDidMount() {

        axios.get(`http://localhost:8000/mCart/products/${this.state.id}`)
            .then(res => {
                const product = res.data.data.products[0];

                this.setState({
                    products: product
                })

            })
            .catch(error => console.log("error is : " + error))

    }

    render() {

        let img_url = `/images/${this.state.products.image_name}`
        const linkToCart ={
            pathname : `/Cart`,
            id : this.state.id
          }
        return (

            <>
                <div className="container" >
                    <div className="row">
                        <div className="col">
                        <div id="product_desc-img">
                                <img src={img_url} height="500" width="400"></img>
                            </div>
                        </div>
                            
                        <div className="col">
                            <div id="product_desc-block">

                            <div id="product_desc-title"><h2>{this.state.products.name}</h2></div>
                           <div className=""><h2>Rs. {this.state.products.price}</h2></div>
                           {this.state.products.available? "":<span className="text text-danger">Currently Unavailable</span>}
                            <text className="text"> <h5 className="text text-primary">Description</h5><p>{this.state.products.description}</p></text>
                            
                            </div>
                            <Link to={linkToCart} className="btn btn-primary btn-sm" id="addToCart">Add to Cart</Link>
                            <div ><Link to="#" className="btn btn-success btn-lg" id="addToCart">Buy Now</Link></div>
                            
                        </div>
                            
                        
                    </div>
                </div>
            </>

        )


    }
}

export default ProductDescription;