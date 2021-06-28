import React, {  useEffect, useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ClearIcon from '@material-ui/icons/Clear';
import { listPage, listShopMenuExtend } from './Consts';
import Collection1 from "./../../assets/images/collect_menu_1.jpg";
import Collection2 from "./../../assets/images/collect_menu_2.jpg";
import Collection3 from "./../../assets/images/collect_menu_3.jpg";
import { useHistory } from 'react-router-dom';


const listCollections = [
    {   
        id:1,
        image: Collection1,
        path: ""
    },
    {
        id:2,
        image: Collection2,
        path: ""
    },
    {   
        id:3,
        image: Collection3,
        path: ""
    }
]

const Menu = (props) => {
    const {isShowHambMenu, hiddenHambMenu} = props;
    const [isShowExtendMenu, setShowExtendMenu] = useState({
        shop:false, collections: false, pages: false
    });
    const [isShowExtendMenuLevel2, setShowExtendMenuLevel2] = useState(
        {fresh: false, mixed: false, banana: false}
    );
    const [isHiddenHambergerMenu, setHiddenMenuHamberger] = useState(true);
    useEffect(() => {
        if(isShowHambMenu === true){
            setHiddenMenuHamberger(false)
        };
    },[isShowHambMenu]);
    const history = useHistory();

    return (
        <>
            <ul className="menu">
                <li className="menu_item">
                    <div className="home align_center" onClick={() => history.push("/page/home")}>
                        HOME
                    </div>
                </li>
                <li className="menu_item shop">
                    <div className="align_center">
                        SHOP
                        <span><ExpandMoreIcon /></span>
                    </div>
                    <div className="extend">
                        {listShopMenuExtend.map(item => {
                            return (
                                <div className="shop_item" key={item.title}>
                                    <p className="shop_title_extend">{item.title}</p>
                                    {item.listCates.map(x => {
                                        return (
                                            <p className="shop_name_extend" key={item.id}>{x.name}</p>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </li>
                <li className="menu_item collections ">
                    <div className="align_center">
                        <span onClick={() => history.push("/page/collections")}>
                            COLLECTIONS
                            <span><ExpandMoreIcon /></span>
                        </span>
                    </div>
                    <div className="extend">
                        {listCollections.map(item => {
                            return(
                                <div className="collections_item" key={item.image} >
                                    <div className="overlay"></div>
                                    <img src={item.image} alt="img" />
                                </div>
                            )
                        })}
                    </div>
                </li>
                <li className="menu_item page " style={{position:"relative"}}>
                    <div className="align_center">
                        PAGES
                        <span><ExpandMoreIcon /></span>
                    </div>
                    <div className="extend_page">
                        {listPage.map(item => {
                            return(
                                <p className="page_item" key={item.name}>{item.name}</p>
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
            <div className={`menu_humberger ${(isHiddenHambergerMenu)  ? "hiddenHambMenu": ""}`}>
                <div className="overlay"onClick={() => {
                    setHiddenMenuHamberger(true);
                    hiddenHambMenu()
                }}>

                </div>
                <div className="menu_humberger_container">
                    <span className="cancel_icon" style={{zIndex:5}} onClick={() => {
                        setHiddenMenuHamberger(true);
                        hiddenHambMenu()
                    }}>
                        <ClearIcon />
                    </span>
                    <ul className="list_hamb_level1" > 
                        <li className="item_level1">
                            <div className="tab_item_level1" onClick={() =>history.push("./page/home")}>
                                HOME
                            </div>
                        </li>
                        <li className="item_level1"> 
                            <div className={`tab_item_level1 ${isShowExtendMenu.shop ? "active" : ""}`} onClick={() => setShowExtendMenu({...isShowExtendMenu,shop:!isShowExtendMenu.shop})}>
                                SHOP
                                <span><ExpandMoreIcon /></span>
                            </div>
                            <ul className={`list_hamb_level2 ${isShowExtendMenu.shop ? "showExtendMenu" : ""}`}>
                                <li className="item_level2">
                                    <div className={`tab_item_level2 ${isShowExtendMenuLevel2.fresh ? "active" : ""}`} onClick={() => setShowExtendMenuLevel2({...isShowExtendMenuLevel2,fresh:!isShowExtendMenuLevel2.fresh})}>
                                        Fresher Food
                                        <span><ExpandMoreIcon /></span>
                                    </div>
                                    <ul className={`list_hamb_level3 ${isShowExtendMenuLevel2.fresh ? "showExtendMenu" : ""}`} >
                                        <li className="item_level3">
                                            Fruit and Nuts
                                        </li>
                                        <li className="item_level3">
                                            Oranges
                                        </li>
                                        <li className="item_level3">
                                            Banana
                                        </li>
                                    </ul>
                                </li>
                                <li className="item_level2">
                                    <div className={`tab_item_level2 ${isShowExtendMenuLevel2.mixed ? "active" : ""}`} onClick={() => setShowExtendMenuLevel2({...isShowExtendMenuLevel2,mixed:!isShowExtendMenuLevel2.mixed})}>
                                        Mixed Food
                                        <span><ExpandMoreIcon /></span>
                                    </div>
                                    <ul className={`list_hamb_level3 ${isShowExtendMenuLevel2.mixed ? "showExtendMenu" : ""}`}>
                                        <li className="item_level3">
                                            Fruit and Nuts
                                        </li>
                                        <li className="item_level3">
                                            Oranges
                                        </li>
                                        <li className="item_level3">
                                            Banana
                                        </li>
                                    </ul>
                                </li>
                                <li className="item_level2">
                                    <div className={`tab_item_level2 ${isShowExtendMenuLevel2.banana ? "active" : ""}`} onClick={() => setShowExtendMenuLevel2({...isShowExtendMenuLevel2,banana:!isShowExtendMenuLevel2.banana})}>
                                        Bananas and Plaintains
                                        <span><ExpandMoreIcon /></span>
                                    </div>
                                    <ul className={`list_hamb_level3 ${isShowExtendMenuLevel2.banana ? "showExtendMenu" : ""}`}>
                                        <li className="item_level3">
                                            Fruit and Nuts
                                        </li>
                                        <li className="item_level3">
                                            Oranges
                                        </li>
                                        <li className="item_level3">
                                            Banana
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="item_level1">
                            <div className={`tab_item_level1 ${isShowExtendMenu.collections ? "active" : ""}`} onClick={() => setShowExtendMenu({...isShowExtendMenu,collections:!isShowExtendMenu.collections})}>
                                COLLECTIONS
                                <span><ExpandMoreIcon /></span>
                            </div>
                            <ul className={`list_hamb_level2 hamb_collection ${isShowExtendMenu.collections ? "showExtendMenu" : ""}`} >
                                {listCollections.map(item => {
                                    return (
                                        <li className="hamb_img" key={item.id}>
                                            <img src={item.image} alt="image_collection"/>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                        <li className="item_level1">
                            <div className={`tab_item_level1 ${isShowExtendMenu.pages ? "active" : ""}`} onClick={() => setShowExtendMenu({...isShowExtendMenu,pages:!isShowExtendMenu.pages})}>
                                PAGES
                                <span><ExpandMoreIcon /></span>
                            </div>
                            <ul className={`list_hamb_level2  ${isShowExtendMenu.pages ? "showExtendMenu" : ""}`} >
                                {listPage.map(item => {
                                    return (
                                        <li className="item_level2" key={item.name}>
                                            <div className="tab_item_level2">
                                                {item.name}
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                        <li className="item_level1">
                            <div className="tab_item_level1">
                                BLOGS
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Menu