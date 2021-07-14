import React from "react";
import Nav from "../../components/Nav";
import {testListNews } from "../../constants/const";
import { Box, Grid} from "@material-ui/core";
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import "./index.scss"
import { useHistory } from "react-router-dom";

const Blogs = (props) => {
    const history = useHistory()
    return (
        <div className="blog">
            <Nav namePage="News" />
            <Box className="box_container--page">
                <Grid container spacing={5}>
                        {testListNews.map(item => {
                            const path = item.title.toLowerCase().split(' ').join("-");
                            return (
                                <Grid item lg={6} xs={12} md={6} sm={6}>
                                    <div className="news_item" key={item.id}>
                                        <div className="image_news">
                                            <img src={item.image} alt="imageNews" />
                                        </div>
                                        <h4 className="title_news">{item.title}</h4>
                                        <p className="content_news">{item.content} </p>
                                        <p className="more" onClick={() => history.push(`/page/blog/news/${path}`)}>
                                            Read More
                                            <span>
                                                <ArrowForwardOutlinedIcon />
                                            </span>
                                        </p>
                                    </div>
                                </Grid>
                            )
                        })}
                    </Grid>
            </Box>
        </div>
    )
}
export default Blogs