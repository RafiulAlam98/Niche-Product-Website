import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
     const [products,setProducts] = useState([])
     const [page,setPage] = useState('home')
     const size = 6;

     useEffect(()=>{
          fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
          .then(res => res.json())
          .then(data => {
               // console.log(data)
               setProducts(data)
          })
     },[])

     return (
          <Container fluid className="card-style pt-4">
               <h1 className="text-primary">OUR PRODUCTS</h1>
               <Container>
                    <Row >
                         {products.map(product => <Product
                         product={product}
                         key={product._id}></Product>)}
                    </Row>
               </Container>
             

          </Container>
     );
};

export default Products;