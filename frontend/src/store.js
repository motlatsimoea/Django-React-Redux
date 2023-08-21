import { configureStore, combineReducers } from '@reduxjs/toolkit'
import thunk from "redux-thunk";

import { 
    productListReducer,
    productDetailsReducer,
    productDeleteReducer, 
    productCreateReducer, 
    productUpdateReducer,
    productReviewCreateReducer,
    productTopRatedReducer,
} from './features/ProductReducers'
import { cartReducer } from './features/cartReducers'
import { 
        userLoginReducer, 
        userRegisterReducer, 
        userDetailsReducer, 
        userUpdateProfileReducer, 
        userListReducer,
        userDeleteReducer,
        userUpdateReducer
     }
    from './features/userReducers'

import { 
    orderCreateReducer, 
    orderDetailsReducer, 
    orderPayReducer, 
    orderListMyReducer,
    orderListReducer,
    orderDeliverReducer,
 } from './features/orderReducers'

const reducer = combineReducers({
    productList: productListReducer, 
    productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUdate: productUpdateReducer,
    productReviewCreate: productReviewCreateReducer,
    productTopRated: productTopRatedReducer,
    
    cart: cartReducer,

    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails:  userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer,
    orderList: orderListReducer,
    orderDeliver: orderDeliverReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const UserInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}

const initialState = {
    cart: { 
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
    },
    userLogin: {userInfo: UserInfoFromStorage },
}; 
const middleware = [thunk]

const store = configureStore({
    reducer,
    middleware,
    preloadedState: initialState, 
})


export default store;