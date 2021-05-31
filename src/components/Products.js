import React from 'react';
import Card from './Card';
import axios from 'axios'


class Products extends React.Component{

    state={
        products:[]
    }

    componentDidMount(){
        console.log("In component did mount");

        axios.get(`http://localhost:8000/mCart/products`)
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

        let products = this.state.products;
        console.log(products)
        return(

            <>
            
            <div className="page-title"><h2>Welcome to GadgetMart</h2></div>
            <div className="container">

            <div className="row">
            {products.map((p,index)=>(

                <Card key={p._id}product={p}/>

            ))}
            
            
            </div>
            
           {/*_id="ACM" name="SAMSUNG M21" brand="Samsung" Type="mobile" price={200} available={true} */}

            </div>
           
            
            
            
            </>


        )

    }

}

export default Products;