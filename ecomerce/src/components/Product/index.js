
import { Box, Divider, Grid, Modal, Tooltip } from "@material-ui/core";
import ClearIcon from '@material-ui/icons/Clear';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ButtonPrimary from "../../components/ButtonPrimary";
import "./index.scss"
const Product = (props) => {
    const { product } = props;
    const history = useHistory()
    const [ isShowQuickView, setShowQuickView ] = useState(false);
    const [ quanlityPrd, setQuanlityPrd ] = useState(1)

    const useStyles = makeStyles((theme) => ({
        paper: {
          position: 'absolute',
          top:'50%',
          left:'50%',
          transform:'translate(-50%,-50%)',
          outline:'none',
          backgroundColor: 'white',
          border: 'none',
          borderRadius:"3px",
          padding: '1rem 1.5rem',
          overflowX:"hidden"
        },
        header: {
            display:"flex",
            justifyContent:"space-between",
        },
        divider: {
            height:'1.5px',
            marginTop:'1rem',
            background:'#333333'
        },
        info: {
            
        },
        price :{
            fontWeight:"500",
        }
    }));
    const classes = useStyles();
    const salePrice = Math.floor((product.price ? product.price : 0) * (1 - product.salePercent / 100));
    const renderStar = () => {
        let arr= [];
        for(let i =0; i < 5; i++){
            if(i < product.star) {
                arr.push(<span className="choose"><StarIcon /></span>)
            }else {
                arr.push(<span className="not_choose"><StarBorderIcon /></span>)
            }
        }
        return arr
    }
    return (
        <div className="itemProduct">
            <img src={product.images.up} className="up" alt="itemProduct" />
            <div className="down">
                <img src={product.images.down} alt="itemProduct" onClick={() => history.push(`/page/product/${product.name}`)} />
                <div className="action">
                    <Tooltip arrow placement="top" title="WISHLIST">
                        <span><FavoriteBorderIcon /></span>
                    </Tooltip>
                    <Tooltip arrow placement="top" title="QUICK VIEW">
                        <span onClick={() => setShowQuickView(true)}><VisibilityIcon /></span>
                    </Tooltip>
                </div>
                <Modal
                    open={isShowQuickView}
                    onClose={() => setShowQuickView(false)}
                >
                    <div className={classes.paper} id="paper">
                        <div className={classes.header}>
                            <h4>QuickView</h4>
                            <span onClick={() => setShowQuickView(false)}><ClearIcon /></span>
                        </div>
                        <Box marginX={-5}><Divider className={classes.divider} /> </Box>
                        <Grid container spacing={3} style={{marginTop:"1rem"}} >
                            <Grid item md={6} sm={6} xs={12}>
                                <img src={product.images.down} alt="item image" style={{width:"100%"}} />
                            </Grid>
                            <Grid item md={6} sm={6} xs={12} >
                                <div className="info_quickview">
                                    <h4>{product.name}</h4>
                                    <p className="price">
                                        {product.salePercent ? 
                                            <span>{`$${salePrice} USD`}</span> : 
                                            <span>{`${product.price} USD`}</span>
                                        }
                                        {product.salePercent && <span className="sale">{`${product.price} USD`}</span>}
                                    </p>
                                    <p className="desc">{product.description}</p>
                                    <p style={{fontWeight:"600",fontSize:"18px"}}>Size: 
                                        <select style={{padding:"0.25rem 0.5rem", marginLeft:"1rem",fontSize:"14px"}}>
                                            {product.listSize.map(item => {
                                                return <option key={item}>{`${item} KG`}</option>
                                            })}
                                        </select>
                                    </p>
                                    <p style={{fontWeight:"600",fontSize:"18px"}}>Material: 
                                        <select style={{padding:"0.25rem 0.5rem", marginLeft:"1rem",fontSize:"14px"}}>
                                            {product.listMaterial.map(item => {
                                                return <option key={item}>{item}</option>
                                            })}
                                        </select>
                                    </p>
                                    <div className="quanlity">
                                        <span style={{display:"flex",alignItems:"center"}}>
                                            <span className="down" onClick={() => {
                                                if(quanlityPrd > 1){
                                                    setQuanlityPrd(quanlityPrd -1)
                                                }}
                                            }>-</span>
                                            <span className="quanlity_nums">
                                                <input 
                                                    type="number" 
                                                    min={1} 
                                                    value={quanlityPrd}
                                                    onChange={(e) => setQuanlityPrd(e.target.value)} 
                                                />
                                            </span>
                                            <span className="up" onClick={() => setQuanlityPrd(quanlityPrd +1)}>+</span>
                                        </span>
                                        <span className="icon"><LocalMallIcon /></span>
                                        <span className="icon"><FavoriteBorderIcon /></span>
                                    </div>
                                    
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Modal>
            
            </div>
            <div className="info">
                <p className="name"  onClick={() => history.push(`/page/product/${product.name}`)}>{product.name}</p>
                <div className="review">
                    <span className="listStar">
                        {renderStar()}
                    </span>
                    <span className="quanlity">{`${product.reviewr} review`}</span>
                </div>
                <p className="price">
                    {product.salePercent ? 
                        <span>{`$${salePrice} USD`}</span> : 
                        <span>{`${product.price} USD`}</span>
                    }
                    {product.salePercent && <span className="sale">{`${product.price} USD`}</span>}
                </p>
                <ButtonPrimary content="ADD TO CART"/>
            </div>
        </div>
    )
}
export default Product