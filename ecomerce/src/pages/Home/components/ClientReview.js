import React, { useEffect } from "react";
import { Container, Box, Grid } from "@material-ui/core";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FormatQuoteOutlinedIcon from '@material-ui/icons/FormatQuoteOutlined';
import { connect, useDispatch } from "react-redux";
import {getListReview} from "../redux/clientReviewSlice"

const ClientReview = (props) => {

    const dispatch = useDispatch();
    const {listClientReview} = props;
    useEffect(() => {
        dispatch(getListReview())
    }, [])
    return (
        <div className="client_review">
            <h3>Purchasing Power Parity</h3>
            <Container maxWidth="xl">
                <Box className="box_container">
                    <Grid container spacing={3}>
                        {listClientReview.map(item => {
                            const renderStar = () => {
                                let arr= [];
                                for(let i =0; i < 5; i++){
                                    if(i < item.star) {
                                        arr.push(<span className="choose"><StarIcon /></span>)
                                    }else {
                                        arr.push(<span className="not_choose"><StarBorderIcon /></span>)
                                    }
                                }
                                return arr
                            }
                            return (
                                <Grid item md={4} sm={6} xs={12} key={item.id}>
                                    <div className="client_review--item">
                                        <div className="star">
                                            {renderStar()}
                                        </div>
                                        <h4 className="division">{`For ${item.division}`}</h4>
                                        <p className="content">
                                            {item.content}
                                        </p>
                                        <span className="icon">
                                            <FormatQuoteOutlinedIcon />
                                        </span>
                                        <p className="writter">
                                            {`By ${item.author}`}
                                        </p>
                                    </div>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Box>
            </Container>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        listClientReview : state.clientReview.listReview
    }
}
export default connect(mapStateToProps, null) (ClientReview)