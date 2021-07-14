import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { listPage, listShopMenuExtend } from './Consts';
import Collection1 from "./../../assets/images/collect_menu_1.jpg";
import Collection2 from "./../../assets/images/collect_menu_2.jpg";
import Collection3 from "./../../assets/images/collect_menu_3.jpg";

const listCollections = [
    {
        image: Collection1,
        path: ""
    },
    {
        image: Collection2,
        path: ""
    },
    {
        image: Collection3,
        path: ""
    }
]

const Menu = (props) => {
    return (
        <>
            <ul className="menu">
                <li className="menu_item">
                    <div className="home align_center">
                        HOME
                    </div>
                </li>
                <li className="menu_item ">
                    <div className="align_center">
                        SHOP
                        <span><ExpandMoreIcon /></span>
                    </div>
                    <div className="extend" style={{display:"none"}}>
                        {listShopMenuExtend.map(item => {
                            return (
                                <div className="shop">
                                    <p className="shop_title_extend">{item.title}</p>
                                    {item.listCates.map(x => {
                                        return (
                                            <p className="shop_name_extend">{x.name}</p>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </li>
                <li className="menu_item ">
                    <div className="align_center">
                        COLLECTIONS
                        <span><ExpandMoreIcon /></span>
                    </div>
                    <div className="extend" style={{display:"none"}}>
                        {listCollections.map(item => {
                            return(
                                <div className="collections" key={item.image} >
                                    <div className="overlay"></div>
                                    <img src={item.image} alt="img" />
                                </div>
                            )
                        })}
                    </div>
                </li>
                <li className="menu_item " style={{position:"relative"}}>
                    <div className="align_center">
                        PAGES
                        <span><ExpandMoreIcon /></span>
                    </div>
                    <div className="extend_page">
                        {listPage.map(item => {
                            return(
                                <p className="page_item">{item.name}</p>
                            )
                        })}
                    </div>
                </li>
                <li className="menu_item ">
                    <div className="align_center">
                        BLOGS
                    </div>
                </li>
            </ul>
        </>
    )
}
export default Menu