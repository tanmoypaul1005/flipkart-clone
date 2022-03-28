import React, { useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useDispatch, useSelector } from 'react-redux';
import getParams from '../../../utils/getParams';
import { getProductPage } from '../../../actions/ProductAction';
import Card from '../../../components/UI/Card/Card';



const ProductPage = (props) => {
    const dispatch = useDispatch();
    const product = useSelector(state => state.product);
    const { page } = product;
    const params = getParams(window.location.href);
    console.log("params", { params });
    useEffect(() => {
        const payload = { params }
        dispatch(getProductPage(payload));
    }, [])


    return (
        <div style={{ margin: '0 10px' }}>
            <h3>{page.title}</h3>
            <Carousel renderThumbs={() => { }}>
                <img src={page.bannerPicture} />
                <p className="legend">Legend 1</p>
            </Carousel>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                margin: '10px 0'
            }}>

                <Card style={{ width: '400px', height: '200px', margin: '5px' }}>
                    <img style={{ width: '100%', height: '100%' }} src={page.productPicture} alt="" />
                </Card>
            </div>

        </div>


    );
};

export default ProductPage;