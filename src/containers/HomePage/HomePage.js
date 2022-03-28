import React, { useEffect, useState } from 'react';

import '../css/animate.css';
import '../css/bootstrap.min.css';
import '../css/custom.css';
import '../css/fontawesome.css';
import '../css/responsive.css';
import './HomePage.css';

import Layout from '../../components/Layout/Layout';
import banner from '../../images/Banner.jpg';

import { NavLink, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../actions/categoryActions';
import Banner from './Banner';
import MidSection from './MidSection';



const HomePage = (props) => {
    const category = useSelector(state => state.category);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllCategory());
    }, [])

    console.log("CATE", category);

    const renderCategories = (categories) => {
        let myCategories = [];
        for (let category of categories) {

            myCategories.push(
                <NavLink id="card" style={{ display: 'flex', flexWrap: 'wrap' }} to={`/${category.slug}?cid=${category._id}&type=${category.type}`}>

                    <div id="cardbody" key={category.name}>
                        <img id="ImgContainer" src={category.categoryPicture} />
                        <h5 id="NameContainer" href={`/${category.slug}?cid=${category._id}&type=${category.type}`}>{category.name}</h5></div>

                    <div> {category.children.length > 0 ? (<h5 style={{ display: 'flex', flexWrap: 'wrap', marginLeft: "1rem", marginTop: '0' }}>{renderCategories(category.children)}</h5>) : null}</div>
                </NavLink>
            )
        }
        return myCategories;
    }

    return (
        <div className="HomePage">
            <Layout>
                {/* <div>
                    <div class="container-fluid jumbotron mt-5 ">
                        <div class="row">
                            <div class="col-md-6 justify-content-center">
                                <div class="m-lg-5 m-md-5 p-lg-5 m-sm-3 p-sm-3 p-md-5">
                                    <h1 class="top-banner-title text-justify">Take service like your time</h1>
                                   

                                </div>
                            </div>
                            <div class="col-md-6">
                                <img class="top-banner-img  animated fadeIn" src={banner} />
                            </div>
                        </div>
                    </div>
                </div> */}
                <Banner></Banner>
                <MidSection></MidSection>
            </Layout >


            <div id="Home" style={{ display: 'flex', flexWrap: 'wrap' }}>
                {category.categories.length > 0 ? renderCategories(category.categories) : null}
            </div>

        </div>
    );
};

export default HomePage;