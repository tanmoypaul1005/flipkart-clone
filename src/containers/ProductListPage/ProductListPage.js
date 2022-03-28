import React from 'react'
import ProductStore from './ProductStore/ProductStore'
import Layout from '../../components/Layout/Layout';
import './ProductListPage.css'
import getParams from '../../utils/getParams';
import ProductPage from './ProductPage/ProductPage';



export default function ProductListPage(props) {
  const renderProduct=()=>{
  const params=getParams(window.location.href);
  // console.log("params",params)
  let content = null;
  switch (params.type) {
    case "store":
      content = <ProductStore {...props} />;
      break;
    case "page":
      content = <ProductPage {...props} />;
      break;
    default:
      content = null;
  }

  return content;
};
  
  
  return (
    <div>
      <Layout>
       {renderProduct()}
      </Layout>
    </div>
  )
}
