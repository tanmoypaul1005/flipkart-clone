import { combineReducers } from "redux";
import categoryReducer from "./categoryReducers";
import productsReducers from "./productsReducers";
import authReducers from "./authReducers";
import cartReducer from './cartReducer';
import userReducer from './userReducer';
const reducer=combineReducers({
    category:categoryReducer,
    product:productsReducers,
    auth:authReducers,
    cart: cartReducer,
    user: userReducer
    
})
export default reducer;