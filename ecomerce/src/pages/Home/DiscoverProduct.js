import React from "react";
import imagePrd1 from "./../../assets/images/item1.jpg";
import imagePrd2 from "./../../assets/images/item2.jpg"
import { Tooltip } from "@material-ui/core";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import VisibilityIcon from '@material-ui/icons/Visibility';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ButtonPrimary from "../../components/ButtonPrimary";

const DiscoverProducts = (props) => {
    const listTypePrd = [
        
    ]
    return (
        <div className="discoverPrd">
            <h3>Discover Products</h3>
            <div className="listTypePrd">
                <span className="typePrd">ORAGANIC DRYFRUITS</span>
                <span className="typePrd">FRESH MEAT</span>
                <span className="typePrd">GREEN SEAFOOD</span>
            </div>
            <div className="listItem">
                <div className="item">
                    <img src={imagePrd1} className="up" alt="itemProduct" />
                    <div className="down">
                        <img src={imagePrd2} alt="itemProduct" />
                        <div className="action">
                            <Tooltip arrow placement="top" title="WISHLIST">
                                <span><FavoriteBorderIcon /></span>
                            </Tooltip>
                            <Tooltip arrow placement="top" title="QUICK VIEW">
                                <span><VisibilityIcon /></span>
                            </Tooltip>
                        </div>
                    </div>
                    <div className="info">
                        <p className="name">Healthy Papaya 100% Organic</p>
                        <div className="review">
                            <span className="listStar">
                                <span className="choose"><StarIcon /></span>
                                <span className="choose"><StarIcon /></span>
                                <span className="choose"><StarIcon /></span>
                                <span><StarBorderIcon /></span>
                                <span><StarBorderIcon /></span>
                            </span>
                            <span className="quanlity">1 Review</span>
                        </div>
                        <p className="price">$66.00 USD <span className="sale">$45.00 USD</span></p>
                        <ButtonPrimary content="ADD TO CART"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DiscoverProducts;