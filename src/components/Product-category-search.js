import React from 'react';
import Card from './Card';
import axios from 'axios'
import { useParams } from 'react-router';


class ProductCategory extends React.Component{

    constructor(props)
    {

        super(props);
        this.state={
            products :[]
        }
    }
    

   

    componentDidMount(){
        console.log("In component did mount");

        
        let {search_string} = this.props.match.params;
        axios.get(`http://localhost:8000/mCart/products/search/${search_string}`)
            .then(res=>{
                const products = res.data.data.products;
                // console.log(products)
                this.setState({
                     products
                })
                // console.log(res.data.data.products);
            })
            .catch(error=>console.log("error is : "+error))

    }

    render(){
        const {key} = this.props.match.params;
        let products = this.state.products;
        console.log(products)
        return(

            <>
            
            <h1>Products</h1>
            <div className="container">

            <div className="row">
                
            {products.map((p,index)=>(

                <Card product={p}/>

            ))}
            
            <h1>{key}</h1>
            </div>
            
           {/*_id="ACM" name="SAMSUNG M21" brand="Samsung" Type="mobile" price={200} available={true} */}

            </div>
           
            
            
            
            </>


        )

    }

}


export default ProductCategory;