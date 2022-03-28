import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getOrders } from "../../actions/userAction";
import Layout from "../../components/Layout/Layout";
import Card from "../../components/UI/Card/Card";
import { BiRupee } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";

import "./OrderPage.css";
import { Breed } from "../../components/MaterialUI/MaterialUI";



const OrderPage = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  console.log(user);

  return (
    <Layout>
    
      <div style={{ maxWidth: "1160px", margin: "5px auto" }}>
        <Breed
          breed={[
            { name: "Home", href: "/" },
            { name: "My Account", href: "/account" },
            { name: "My Orders", href: "/account/orders" },
          ]}
          breedIcon={<IoIosArrowForward />}
        />
        {user.orders.map((order) => {
          return order.items.map((item) => (
            <Card style={{ display: "block", margin: "5px 0" }}>
              <NavLink
                to={`/order_details/${order._id}`}
                className="orderItemContainer"
                style={{ textDecoration: "none"}}
              >
          <div className="orderImgContainer">
          <img className="orderImg"src={item.productId.productPicture}/>
          </div>


          <div style={{display: 'flex',flex:1,justifyContent: 'space-between'}} className="orderRow">
            
            <div className="orderName">{item.productId.name}</div>

            <div  className="orderPrice"><BiRupee />{item.payablePrice}</div>
            
            <div style={{color:"black"}}>{order.paymentStatus}</div>
                
            </div>
            </NavLink>
            </Card>
          ));
        })}
      </div>
    </Layout>
  );
};

export default OrderPage;