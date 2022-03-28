import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductsBySlug } from '../../../actions/ProductAction';
import { NavLink, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rating from './../../../components/UI/Rating';


const ProductStore = (props) => {
    const dispatch = useDispatch();
    const [priceRange,setPriceRange]=useState({
      under5k:5000,
      under10k:10000,
      under15k:15000,
      under20k:20000,
      under35k:35000,
    })
  
    const { slug } = useParams();
  
    const product = useSelector(state => state.product);
    useEffect(() => {
      dispatch(getProductsBySlug(slug))
    }, [])
    return (
        <div>
             {
          Object.keys(product.productsByPrice).map((key, index) => {
            return (
              <div  className="card">
                <div className="cardHeader">
                  <div>{slug} Mobile under {priceRange[key]}</div>
                  <Button>View All</Button>
                </div>
                 <div style={{display:'flex'}}>      
                {
            product.productsByPrice[key].map(product =>
              <NavLink style={{display:'block'}} to={`/${product.slug}/${product._id}`} className="productContainer">
                <div className="productImgContainer">
                    <img src ={product.productPicture}/>
                     
                      </div>
                      <div className="productInfo">
              <a style={{ margin: "10px 0",textDecoration:"none",display:"inline-block" }}>{product.name}</a>
                      </div>

                      <div>
                      <Rating value="4.3" />
                      &nbsp;&nbsp;
                      <span
                        style={{
                          color: "#777",
                          fontWeight: "500",
                          fontSize: "12px",
                          textDecoration:"none",display:"inline-block" 
                        }}
                      >
                        (3353)
                      </span>
                    </div>


              <div className="productPrice">{product.price}</div>
                    </NavLink>
                  )
                }
              </div>  

              </div>
            );
          })
        }

        </div>
    );
};

export default ProductStore;