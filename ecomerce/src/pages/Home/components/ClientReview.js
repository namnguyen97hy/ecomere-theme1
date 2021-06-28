import React from "react";
import { Container, Box, Grid } from "@material-ui/core";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FormatQuoteOutlinedIcon from '@material-ui/icons/FormatQuoteOutlined';

const ClientReview = (props) => {
    const testDataClientReview = [
        {   
            id:1,
            star: 5,
            division: "Design Quality",
            content:"I am very glad that I came across Vegist template. One of the best comprehensive ecommerce designs I have seen. I have been searching around for a while. Their support team has surprised me with prompt responses (100% of the time). ",
            author:"Namnguyen"
        },
        {   
            id:2,
            star: 4,
            division: "Customizability",
            content:"Great theme design, customer service, prices, and customizability! Highly recommended developer for shopify store themes and customization. Fast turn around, will definitely work with again!.One of the best comprehensive ecommerce designs I have seen.",
            author:"Neymar"
        },
        {   
            id:3,
            star: 3,
            division: "Customer Support",
            content:"There were some missing elements from the user's point of view, Hence we have reached to the developers and no dough about the fact these guys are superbly reliable and their quality of support is just phenomenal. You can definitely go ahead with this theme for your grocery shop ",
            author:"Tony Kroos"
        },
        {   
            id:4,
            star: 2,
            division: "Design Quality",
            content:"I am very glad that I came across Vegist template. One of the best comprehensive ecommerce designs I have seen. I have been searching around for a while. Their support team has surprised me with prompt responses (100% of the time). ",
            author:"Messi"
        },
        {   
            id:5,
            star: 5,
            division: "Design Quality",
            content:"Great theme! and more than this If you need help with anything, these guys got your back. Really good support team! I would like to thank you spacingtech team for all the support and did everything so that I could solve my problems. Thanks! Keep up the great work. Honored 5 stars!",
            author:"CR7"
        },
        {   
            id:6,
            star: 2,
            division: "Customer Support",
            content:"I am very glad that I came across Vegist template. One of the best comprehensive ecommerce designs I have seen. I have been searching around for a while. Their support team has surprised me with prompt responses (100% of the time). ",
            author:"Alexander "
        },
    ]
    return (
        <div className="client_review">
            <h3>Purchasing Power Parity</h3>
            <Container maxWidth="xl">
                <Box className="box_container">
                    <Grid container spacing={3}>
                        {testDataClientReview.map(item => {
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
export default ClientReview