import React, { useState, useEffect } from 'react';
import './Header.css';
import flipKartLogo from '../../images/logo/flipKart.jpg';
import goldenStar from '../../images/logo/golden-star.png';
import { IoArrowDownCircleSharp, IoCartSharp, IoSearch } from "react-icons/io5";
import {
  Modal,
  MaterialInput,
  MaterialButton,
  DropdownMenu
} from '../MaterialUI/MaterialUI';
import { useDispatch, useSelector } from 'react-redux';
import { login, signOut, signup as _signup } from '../../actions/authActions';
import { NavLink } from 'react-router-dom';
import Cart from './../UI/Cart';


const Header = (props) => {

  const [loginModal, setLoginModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [signup, setSignup] = useState(false);
  const [error, setError] = useState("");


  // state cart value
  const cart = useSelector((state) => state.cart);

  const userSignup = () => {
    const user = { firstName, lastName, email, password };
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      return;
    }
    dispatch(_signup(user));
  };

  const userLogin = () => {
    if (signup) {
      userSignup();
      setLoginModal(true);
      window.location.reload();
    } else {
      dispatch(login({ email, password }));
    }
  };

  const logout = () => {
    dispatch(signOut());
  };

  useEffect(() => {
    if (auth.authenticate) {
      setLoginModal(false);
    }
  }, [auth.authenticate]);

  // useEffect(() => {
  //   dispatch(getCartItems());
  // }, []);

  // const renderLoggedInMenu = () => {
  //   return (
  //     <a style={{ color: "white", textDecoration: "none", fontSize: "20px", fontWeight: "bold" }} >{`${auth.user.firstName} ${auth.user.lastName}`}</a>
  //     //  { label: "Logout", href: "", icon: null, onClick: logout },
  //   );
  // };


  const renderLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={<a style={{ color: "white", textDecoration: "none", fontSize: "20px", fontWeight: "bold", marginRight: "50px" }}>{`${auth.user.firstName} ${auth.user.lastName}`}</a>}
        menus={[
          { label: "My Profile", href: "", icon: null },
          { label: "SuperCoin Zone", href: "", icon: null },
          { label: "Flipkart Plus Zone", href: "", icon: null },
          {
            label: "Orders",
            href: `/account/orders`,
            icon: null,
          },
          { label: "Wishlist", href: "", icon: null },
          { label: "My Chats", href: "", icon: null },
          { label: "Coupons", href: "", icon: null },
          { label: "Rewards", href: "", icon: null },
          { label: "Notifications", href: "", icon: null },
          { label: "Gift Cards", href: "", icon: null },
          { label: "Logout", href: "", icon: null, onClick: logout },
        ]}
      />
    );
  };

  const renderNonLoggedInMenu = () => {
    return (
      <a className="loginButton" style={{ textDecoration: "none" }}
        onClick={() => { setSignup(false); setLoginModal(true); }}>Login</a>
    );
  };

  function signUp() {
    setLoginModal(true);
    setSignup(true);
  }

  return (
    <div className="header">
      <Modal visible={loginModal} onClose={() => setLoginModal(false)}>
        <div className="authContainer">
          <div id="row">
            <div className="leftspace">
              <h2>Login</h2>
              <p>Get access to your Orders, Wishlist and Recommendations</p>
            </div>

            <div className="rightspace">
              <div className="loginInputContainer">
                {auth.error && (
                  <div style={{ color: "red", fontSize: 12 }}>{auth.error}</div>
                )}
                {signup && (
                  <MaterialInput
                    type="text"
                    label="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                )}
                {signup && (
                  <MaterialInput
                    type="text"
                    label="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                )}

                <MaterialInput
                  type="text"
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MaterialInput
                  type="password"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                // rightElement={<a href="#">Forgot?</a>}
                />
                <MaterialButton
                  title={signup ? "Register" : "Login"}
                  bgColor="#fb641b"
                  textColor="#ffffff"
                  style={{
                    margin: "40px 0 20px 0",
                  }}
                  onClick={userLogin}
                />
                <p style={{ textAlign: "center" }}>OR</p>
                <MaterialButton
                  title="New Customer?"
                  bgColor="#ffffff"
                  textColor="#2874f0"
                  onClick={signUp}
                  style={{
                    margin: "20px 0",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <div className="subHeader">
        <div className="logo">
          <img src={flipKartLogo} className="logoimage" alt="" />
          <a style={{ marginTop: '-10px' }}>
            <span className="exploreText">Explore</span>
            <span className="plusText">Plus</span>
            <img src={goldenStar} className="goldenStar" alt="" />
          </a>
        </div>

        <div style={{ padding: '0 10px' }}>


          <div className="searchInputContainer">
            <input
              className="searchInput"
              placeholder={"search for products, brands and more"}
            />
            <div className="searchIconContainer">
              <IoSearch
                style={{
                  color: "#2874f0",
                }}
              />
            </div>
          </div>
        </div>
        {/* search component ends here */}

        {/* right side menu */}
        <div className="rightMenu">
          {auth.authenticate ? renderLoggedInMenu() : renderNonLoggedInMenu()}
          <div>
            <a href={`/cart`} className="cart">
              <Cart count={Object.keys(cart.cartItems).length} />
              <span style={{ margin: "0 10px" }}>Cart</span>
            </a>
          </div>
        </div>
        {/* right side menu ends here */}
      </div>
    </div>
  );
};

export default Header;
