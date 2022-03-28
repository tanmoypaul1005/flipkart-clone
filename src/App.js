import { useEffect } from 'react';
import './App.css';
import HomePage from './containers/HomePage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductListPage from './containers/ProductListPage/ProductListPage';
import { useSelector, useDispatch } from 'react-redux';
import { isUserLoggedIn } from './actions/authActions';
import ProductDetailsPage from './containers/ProductDetailsPage/ProductDetailsPage';
import CartPage from './containers/CartPage/CartPage';
import { updateCart } from './actions/cartAction';
import CheckoutPage from './containers/CheckoutPage/CheckoutPage';
import OrderPage from './containers/OrderPage/OrderPage';
import OrderDetailsPage from './containers/OrderDetailsPage/OrderDetailsPage';
import Footer from './containers/Footer/Footer';
import Contact from './containers/Contact/Contact';

function App() {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!auth.authenticate) (
      dispatch(isUserLoggedIn())
    )
  }, [auth.authenticate]);

  useEffect(() => {
    dispatch(updateCart());
  }, [auth.authenticate]);

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/account/orders" element={<OrderPage />} />
          <Route path="/order_details/:orderId" element={<OrderDetailsPage />} />
          <Route path="/:productSlug/:productId" element={<ProductDetailsPage />} />
          <Route path="/:slug" element={<ProductListPage />} />
        </Routes>
      </BrowserRouter>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
