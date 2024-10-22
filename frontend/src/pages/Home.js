
//{products.map(product =><ProductCard product={product} />)}

import {Fragment,useState,useEffect} from "react"
//import ProductCard from "../components/ProductCard"
export default function Home()
{

    const [products, setProducts] = useState([]);
    //const [searchParams, setSearchParams] =  useSearchParams()

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL+'/products')
        .then(res => res.json())
        .then( res => setProducts(res.products))
    },[])
return <Fragment>
 

  <h1 id="products_heading">Latest Products</h1>

  <section id="products" className="container mt-5">
    <div className="row">
    
     <div class="col-sm-12 col-md-6 col-lg-3 my-3">
        <div class="card p-3 rounded">
          <img class="card-img-top mx-auto" src="/images/products/2.jpg" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">
              <a href="">WRISTIO HD, Bluetooth Calling Smart Watch, 15 days battery life, Water Resistant</a>
            </h5>
            <div class="ratings mt-auto">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
              <i class="fa fa-star-o"></i>
              <span id="no_of_reviews">(5 Reviews)</span>
            </div>
            <p class="card-text">Rs:150.32</p>
            <a href="#" id="view_btn" class="btn btn-block">View Details</a>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-6 col-lg-3 my-3">
        <div class="card p-3 rounded">
          <img class="card-img-top mx-auto" src="/images/products/3.jpg" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">
              <a href="">Dell Inspiron 3511 Laptop, Intel i3-1115G4, 8GB, 512GB</a>
            </h5>
            <div class="ratings mt-auto">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
              <i class="fa fa-star-o"></i>
              <span id="no_of_reviews">(5 Reviews)</span>
            </div>
            <p class="card-text">Rs:440.57</p>
            <a href="#" id="view_btn" class="btn btn-block">View Details</a>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-6 col-lg-3 my-3">
        <div class="card p-3 rounded">
          <img class="card-img-top mx-auto" src="/images/products/4.jpg" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">
              <a href="">PTron Newly Launched Tangent Sports, 60Hrs Playtime</a>
            </h5>
            <div class="ratings mt-auto">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
              <i class="fa fa-star-o"></i>
              <span id="no_of_reviews">(5 Reviews)</span>
            </div>
            <p class="card-text">Rs:15.46</p>

            <a type="button" href="#" id="view_btn" class="btn btn-block">View Details</a>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-6 col-lg-3 my-3">
        <div class="card p-3 rounded">
          <img class="card-img-top mx-auto" src="/images/products/5.jpg" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">
              <a href="">Campus Men's Maxico Running Shoes</a>
            </h5>
            <div class="ratings mt-auto">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
              <i class="fa fa-star-o"></i>
              <span id="no_of_reviews">(5 Reviews)</span>
            </div>
            <p class="card-text">RS:10.12</p>
            <a href="#" id="view_btn" class="btn btn-block">View Details</a>
          </div>
        </div>
      </div>
    </div>
  </section>



    </Fragment>
}
/*import {Fragment, useEffect, useState} from 'react'
import ProductCard from '../components/ProductCard'
import { useSearchParams } from 'react-router-dom';

export default function Home() {
    const [products, setProducts] = useState([]);
    const [searchParams, setSearchParams] =  useSearchParams()

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL+'/products?'+searchParams)
        .then(res => res.json())
        .then( res => setProducts(res.products))
    },[searchParams])

    return <Fragment>
        <h1 id="products_heading">Latest Products</h1>

        <section id="products" className="container mt-5">
        <div className="row">
            {products.map(product =><ProductCard product={product} />)} 
        </div>
        </section>
    </Fragment>
}*/
