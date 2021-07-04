import React from "react";

import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";

const Home = React.lazy(() => import("../pages/Home"));
const Product = React.lazy(() => import("../pages/Product"));
const ProductItem = React.lazy(() => import("../pages/Product/ProductItem"));
const Collections = React.lazy(() => import("../pages/Collections"));
const CollectionItem = React.lazy(() => import("../pages/Collections/CollectionItem"));
const Blogs = React.lazy(() => import("../pages/Blogs"));
const BlogItem = React.lazy(() => import("../pages/Blogs/BlogItem"));
const Cart = React.lazy(() => import("../pages/Cart"));
// const Register = React.lazy(() => import("../pages/Register"));
// const Login = React.lazy(() => import("../pages/Login"));
// const Account = React.lazy(() => import("../pages/Account"));

// const WishList = React.lazy(() => import("../pages/WishList"));
// const Checkout = React.lazy(() => import("../pages/Checkout"));

const Dashboard = React.lazy(() => import("../dashBoard"));

const routes = [
    {
        path:"/",
        name:"Home",
        route:Route,
        component: () => <Redirect to="/page/home" />,
        roles:["Admin","User"],
        exact:true,
        title:"Home"
    },
    {
        path:"/page/home",
        name:"Home",
        route:Route,
        component: Home,
        roles:["Admin","User"],
        exact:true,
        title:"Home"
    },
    {
        path:"/page/product",
        name:"Product",
        route:Route,
        component: Product,
        roles:["Admin","User"],
        exact:true,
        title:"Product"
    },
    {
        path:"/page/product/:item",
        name:"ProductItem",
        route:Route,
        component: ProductItem,
        roles:["Admin","User"],
        exact:true,
        title:"ProductItem"
    },
    {
        path:"/page/collections",
        name:"Collections",
        route:Route,
        component: Collections,
        roles:["Admin","User"],
        exact:true,
        title:"Collections"
    },
    {
        path:"/page/collections/:item",
        name:"Collection Items",
        route:Route,
        component: CollectionItem,
        roles:["Admin","User"],
        exact:true,
        title:"Collection Items"
    },
    {
        path:"/page/blog/news",
        name:"News",
        route:Route,
        component:Blogs ,
        roles:["Admin","User"],
        exact:true,
        title:"Blogs"
    },
    {
        path:"/page/blog/news/:blogName",
        name:"News Items",
        route:Route,
        component:BlogItem ,
        roles:["Admin","User"],
        exact:true,
        title:"News Items"
    },
    // {
    //     path:"/page/register",
    //     name:"Register",
    //     route:Route,
    //     component: Register,
    //     roles:["Admin","User"],
    //     exact:true,
    //     title:"Register"
    // },
    // {
    //     path:"/page/login",
    //     name:"Login",
    //     route:Route,
    //     component: Login,
    //     roles:["Admin","User"],
    //     exact:true,
    //     title:"Login"
    // },
    // {
    //     path:"/page/account",
    //     name:"Account",
    //     route:Route,
    //     component: Account,
    //     roles:["Admin","User"],
    //     exact:true,
    //     title:"Account"
    // },
    // {
    //     path:"/page/wishlist",
    //     name:"WishList",
    //     route:Route,
    //     component: WishList,
    //     roles:["Admin","User"],
    //     exact:true,
    //     title:"WishList"
    // },
    {
        path:"/page/cart",
        name:"Cart",
        route:Route,
        component: Cart,
        roles:["Admin","User"],
        exact:true,
        title:"Cart"
    },
    // {
    //     path:"/page/checkout",
    //     name:"Checkout",
    //     route:Route,
    //     component: Checkout,
    //     roles:["Admin","User"],
    //     exact:true,
    //     title:"Checkout"
    // },
    {
        path:"/admin/dashboard",
        name:"DashBoard",
        route:Route,
        component: Dashboard,
        roles:["Admin"],
        exact:true,
        title:"DashBoard"
    },
]
export {routes}

