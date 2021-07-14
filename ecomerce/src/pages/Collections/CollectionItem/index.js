import React, { useEffect, useState } from "react";
import "./index.scss"
import { useHistory, useParams } from "react-router-dom"
import Nav from "../../../components/Nav";
import { Container, Box, Grid, Divider } from "@material-ui/core";
import ListIcon from '@material-ui/icons/List';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import Product from "../../../components/Product";
import { listItemTest1 } from "../../../constants/const";
import ProductOneLine from "../../../components/ProductOneLine";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

const CollectionItem = (props) => {
    const {item}= useParams();
    const ListCate = [
        {
            id:0,
            name:"Break's Fast",
            quanlity:10
        },
        {
            id:1,
            name:"Break's Fast1",
            quanlity:9
        },
        {
            id:2,
            name:"Break's Fast2",
            quanlity:23
        },
        {
            id:3,
            name:"Break's Fast3",
            quanlity:18
        },
        {
            id:4,
            name:"Break's Fast4",
            quanlity:15
        },
        {
            id:5,
            name:"Break's Fast",
            quanlity:10
        },
        {
            id:6,
            name:"Break's Fast1",
            quanlity:9
        },
        {
            id:7,
            name:"Break's Fast2",
            quanlity:23
        },
        {
            id:8,
            name:"Break's Fast3",
            quanlity:18
        },
        {
            id:9,
            name:"Break's Fast4",
            quanlity:15
        },
    ];
    const ListPrice = [
        {
            id:0,
            name:"0-100"
        },
        {
            id:1,
            name:"100-200"
        },
        {
            id:2,
            name:"200-300"
        },
    ]
    const ListSize = [
        {
            id:0,
            name:'1KG'
        },
        {
            id:1,
            name:'2KG'
        },
        {
            id:2,
            name:'3KG'
        },
        {
            id:3,
            name:'5KG'
        },
        {
            id:4,
            name:'10KG'
        },
    ]
    const ListTag = [
        {
            id:0,
            name:'Apple'
        },
        {
            id:1,
            name:'Vegetabe'
        },
        {
            id:2,
            name:'Meat'
        },
        {
            id:3,
            name:'Carrot'
        },
        {
            id:4,
            name:'Carcabage'
        },
        {
            id:5,
            name:'Cucumber'
        },
        {
            id:6,
            name:'Lemon'
        },
    ]
    const ListVendor = [
        {
            id:0,
            name:'Farrgalad'
        },
        {
            id:1,
            name:'Inkcruto'
        },
        {
            id:2,
            name:'Mogachi'
        },
        {
            id:3,
            name:'Frankel'
        },
        {
            id:4,
            name:'Soladbale'
        },
    ]
    const listSortBy = [
        {
            id:0,
            name:"Featured"
        },
        {
            id:1,
            name:"A->Z"
        },
        {
            id:2,
            name:"Z->A"
        },
        {
            id:3,
            name:"Price, low to high"
        },
        {
            id:4,
            name:"Price, high to low"
        },
    ]
    const [activeCate, setActiveCate] = useState(0);
    const [activePrice, setActivePrice] = useState();
    const [activeSize, setActiveSize] = useState();
    const [activeTag, setActiveTag] = useState();
    const [activeVendor, setActiveVendor] = useState(0);
    const [viewList, setViewList] = useState(4);
    const [isShowCateExtend, setShowCateExtend] = useState(false);
    const [isShowPriceExtend, setShowPriceExtend] = useState(false)
    const [isShowSizeExtend, setShowSizeExtend] = useState(false)
    const [isShowTagExtend, setShowTagExtend] = useState(false)
    const [isShowVendorExtend, setShowVendorExtend] = useState(false);

    const [page, setPage] = useState(1);
    const history = useHistory()
    
    const renderListItem = (listItem, activeItem, setActiveItem) => 
        { return listItem.map(item => {
            const idItem = item.id === activeItem ? "active" : "";
            return (
                <div 
                    className="filter_item"  
                    key={item.id} 
                    onClick={() => setActiveItem(item.id) }
                    id={idItem}    
                >
                    <div className="name">
                        <input 
                            type="checkbox" 
                            checked={idItem ? true : false}
                            onChange={() => setActiveItem(item.id)} 
                        />
                        <span>{item.name}</span>
                    </div>
                    <span style={{marginRight:"1rem"}}>{ item.quanlity ? `(${item.quanlity})` : ''}</span>
                </div>
            )
        })
    }


    const renderPanigation = (quanlity, limit) => {
        const quanlityPage = Math.ceil(quanlity/limit);
        const arr = []
        for(let i = 1; i < quanlityPage + 1 ; i++ ) {
            arr.push(
                <span 
                    className="page_number" 
                    id={i === page ? "active" : ""}
                    onClick={() => {
                        setPage(i);
                        history.push(`../collections/${item}?page=${i}`)
                    }}
                >
                    {i}
                </span>
            )
        }
        arr.push(<span className="next_page" onClick={() => setPage(page + 1)}><DoubleArrowIcon /></span>);
        return arr
    }
    return (
        <div className="collection_item">
            <Nav namePage={item} />
            <Container maxWidth="xl">
                <Box className="box_container">
                    <Grid container spacing={3}>
                        <Grid item lg={3} md={3} xs={12}>
                            <div className="filter_collection">
                                <div className="cate_collect">
                                    <span className="filter_title" onClick={() => setShowCateExtend(!isShowCateExtend)}>
                                        <p id="title">Categories</p>
                                        <span><ExpandMoreIcon /></span>
                                    </span>
                                    <p id="title" className="title_desktop">Categories</p>
                                    <Box marginY={1}><Divider /></Box>
                                    <div className="list_filter list_cate" id={isShowCateExtend ? "show" : ""}>
                                        {renderListItem(ListCate, activeCate, setActiveCate)}
                                    </div>
                                </div>
                                <div className="price">    
                                    <span className="filter_title" onClick={() => setShowPriceExtend(!isShowPriceExtend)}>
                                        <p id="title">Filter by Price</p>
                                        <span><ExpandMoreIcon /></span>
                                    </span>
                                    <p id="title" className="title_desktop">Filter by Price</p>
                                    <Box marginY={1}><Divider /></Box>
                                    <div className="list_filter" id={isShowPriceExtend ? "show" : ""}>
                                        {renderListItem(ListPrice, activePrice, setActivePrice)}
                                    </div>
                                </div>
                                <div className="size">
                                    <span className="filter_title" onClick={() => setShowSizeExtend(!isShowSizeExtend)}>
                                        <p id="title">Filter by Size</p>
                                        <span><ExpandMoreIcon /></span>
                                    </span>
                                    <p id="title" className="title_desktop">Filter by Size</p>
                                    <Box marginY={1}><Divider /></Box>
                                    <div className="list_filter" id={isShowSizeExtend ? "show" : ""}>
                                        {renderListItem(ListSize, activeSize, setActiveSize)}
                                    </div>
                                </div>
                                <div className="tag">
                                    <span className="filter_title" onClick={() => setShowTagExtend(!isShowTagExtend)}>
                                        <p id="title">Filter by Tags</p>
                                        <span><ExpandMoreIcon /></span>
                                    </span>
                                    <p id="title" className="title_desktop">Filter by Tags</p>
                                    <Box marginY={1}><Divider /></Box>
                                    <div className="list_filter" id={isShowTagExtend ? "show" : ""}>
                                        {ListTag.map(item => {
                                            let idTag = item.id === activeTag ? "activeTag" : "";
                                            return (
                                                <span 
                                                    className="tag_item"
                                                    id={idTag}
                                                    onClick={() => setActiveTag(item.id)}
                                                >
                                                    {item.name}
                                                </span>
                                            ) 
                                        })}
                                    </div>
                                </div>
                                <div className="vendor">
                                     <span className="filter_title" onClick={() => setShowVendorExtend(!isShowVendorExtend)}>
                                        <p id="title">Filter by Vendor</p>
                                        <span><ExpandMoreIcon /></span>
                                    </span>
                                    <p id="title" className="title_desktop">Filter by Vendor</p>
                                    <Box marginY={1}><Divider /></Box>
                                    <div className="list_filter" id={isShowVendorExtend ? "show" : ""}>
                                        {renderListItem(ListVendor, activeVendor, setActiveVendor)}
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg={9} md={8} sm={12}>
                            <div className="list_item">
                                <div className="header">
                                    <div className="list_arrange">
                                        <span onClick={() => setViewList(1)}><ListIcon /></span>
                                        <span onClick={() => setViewList(3)}><ViewModuleIcon /></span>
                                        <span id="four_line" onClick={() => setViewList(4)}><ViewComfyIcon /></span>
                                    </div>
                                    <div className="sort_by">
                                        <span>Sort by :</span>
                                        <select className="select">
                                            {listSortBy.map(item => {
                                                return (
                                                    <option key={item.id} className="option">{item.name}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div className="list_item-container" >
                                    <Grid container spacing={2} className={`${viewList === 1 ? "hidden" : ""}`}>
                                        {listItemTest1.map(item => {
                                            return (
                                                <Grid item lg={Number(12/viewList)} md={Number(12/viewList)} sm={Number(12/viewList)} xs={6} >
                                                    <Product product={item}/>
                                                </Grid>
                                            )
                                        })}
                                    </Grid>
                                    <Grid container spacing={2}>
                                        <div className={`list_view_one-line ${viewList === 1 ? "show" : ""}`}>
                                            {listItemTest1.map(item => {
                                                return(
                                                    <ProductOneLine product={item} />
                                                )
                                            })}
                                            
                                        </div>
                                    </Grid>
                                </div>
                                <div className="panigation">
                                    <p className="title">{`Showing 1-10 of ${listItemTest1.length} result`} </p>
                                    <div className="list_page">
                                        {renderPanigation(listItemTest1.length, 10)}
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    )
}
export default CollectionItem