import React, { useState } from "react";
import { Grid, Box, Divider} from "@material-ui/core";

const CartItem = (props) => {
    const {item} = props;
    const [quanlityItem, setQuanlityItem] = useState(1);
    const [deleteItem, setDeleteItem] = useState(false);

    return (
        <>
            <Grid item md={7} sm={12}>
                <div className="cart_product-item" id={deleteItem ? "delete" : ""}>
                    <img src={item.img} alt="product_img" />
                    <div className="product_info">
                        <p className="title">{item.name}</p>
                        <p><span>Size:</span> {`${item.size} KG`} </p>
                        <p><span>Material: </span> {item.material}</p>
                        <p>Mutivew Invotech</p>
                        <p>{`$${item.price} USD`}</p>
                    </div>
                </div>
            </Grid>
            <Grid item md={5} sm={12}>
                <div className="quanlity"  id={deleteItem ? "delete" : ""}>
                    <div className="numbers">
                        <span onClick={() => {
                            if(quanlityItem > 1) {
                                setQuanlityItem(quanlityItem - 1)
                            }
                            else {
                                setDeleteItem(true)
                            }
                        }}>-</span>
                        <input type="number" value={quanlityItem} onChange={(e) => setQuanlityItem(e.target.value)} />
                        <span onClick={() => {
                                setQuanlityItem(quanlityItem + 1)
                        }
                        }>+</span>
                    </div>
                    <p>{`$${item.price * quanlityItem} USD`}</p>
                </div>
            </Grid>
            <Grid item md={12} sm={12}>
                <Box marginTop={1}><Divider /></Box>
            </Grid>

        
        </>
    )
}
export default CartItem