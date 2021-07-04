import React from "react";
import "./index.scss"
import { useParams } from "react-router";
import Nav from "../../../components/Nav";
import {Box, Grid, Divider} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Image1 from "../../../assets/images/new_img1.jpg"
import Image2 from "../../../assets/images/new_img2.jpg"
import Image3 from "../../../assets/images/new_img3.jpg"
import Image4 from "../../../assets/images/new_img4.jpg"
import Image5 from "../../../assets/images/new_img5.jpg";
import blogImage from "../../../assets/images/blog_img1.jpg"
import thumbBlog from "../../../assets/images/h-blog-1_medium.jpg"
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import ButtonSecondary from "../../../components/ButtonSecondary";

const listBlogItems = [
    {
        id:0,
        name:"Green Onion Knife and Salad"
    },
    {
        id:5,
        name:"Heathly And Ski for Organic "
    },
    {
        id:1,
        name:"Fresh Organic Brands And Picnic "
    },
    {
        id:2,
        name:"Organic mix and Mimasa soup"
    },
    {
        id:3,
        name:"Green Mango and Salt "
    },
    {
        id:4,
        name:"Veginal fresh apple "
    },

]
const listRecentPost = [
    {
        id:1,
        name:"Green Onion Knife and Salad place",
        date:"Feb 13, 2021",
        img: Image1
    },
    {
        id:2,
        name:"Green Onion Knife and Salad place",
        date:"Nov 3, 2021",
        img: Image2
    },
    {
        id:3,
        name:"Green Onion Knife and Salad place",
        date:"Aug 18, 2021",
        img: Image3
    },
    {
        id:4,
        name:"Green Onion Knife and Salad place",
        date:"Jan 1, 2021",
        img: Image4
    },
    {
        id:5,
        name:"Green Onion Knife and Salad place",
        date:"Sep 12, 2021",
        img: Image5
    },
]
const listTags = [
    {
        id:0,
        name:"Fresh Fruits"
    },
    {
        id:1,
        name:"Garlic"
    },
    {
        id:2,
        name:"Green Aplle"
    },
    {
        id:3,
        name:"Fresh Meat"
    },
    {
        id:4,
        name:"Oranges"
    },
    {
        id:5,
        name:"Mango"
    },
    {
        id:6,
        name:"Fresh Fish"
    },

]
const listSocial = [
    {
        id:0,
        icon: <FacebookIcon />,
        path:"",
    },
    {
        id:1,
        icon: <TwitterIcon />,
        path:"",
    },
    {
        id:2,
        icon: <PinterestIcon />,
        path:"",
    },
]
const listComment = [
    {
        id:0,
        reviewer: "PH",
        comment:"sildenafil 20mg daily https://pharmaceptica.com/",
        author_name:"namnguyen",
        date:"Jun 27, 2021"
    },
    {
        id:1,
        reviewer: "PH",
        comment:"sildenafil 20mg daily https://pharmaceptica.com/",
        author_name:"namnguyen",
        date:"Jan 12, 2021"
    },
    {
        id:2,
        reviewer: "CE",
        comment:"sildenafil 20mg daily https://pharmaceptica.com/",
        author_name:"namnguyen",
        date:"Sep 7, 2021"
    },
    {
        id:3,
        reviewer: "FD",
        comment:"sildenafil 20mg daily https://pharmaceptica.com/",
        author_name:"namnguyen",
        date:"Aug 19, 2021"
    },
    {
        id:4 ,
        reviewer: "BU",
        comment:"sildenafil 20mg daily https://pharmaceptica.com/",
        author_name:"namnguyen",
        date:"Nov 27, 2021"
    },
]

const BlogItem = (props) => {
    const { blogName } = useParams();
    const formatString = (string) => {
        let stringFormat = (string.charAt(0).toUpperCase() + string.slice(1)).split("-").slice(0,3)
        return stringFormat.join(' ').concat("...")
    }
    return (
        <div className="blog_item">
            <Nav namePage="News" pageDetail={formatString(blogName)} />
            <Box className="box_container--page">
                <Grid container spacing={3}>
                    <Grid item sm={4}>
                        <div className="left_blogs">
                            <div className="item">
                                <p className="title">Search</p>
                                <span className="search_item">
                                    <input placeholder="Search blog" type="text" />
                                    <span id="icon_search"><SearchIcon /></span>
                                </span>
                            </div>
                            <div className="item">
                                <p className="title">Archive</p>
                                <h4>February 2021</h4>
                                {listBlogItems.map(item => {
                                    return (
                                        <div className="archive_item">
                                            <span><ArrowForwardIcon /></span>
                                            <span className="name">{item.name}</span>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="item">
                                <p className="title">Recent Post</p>
                                {listRecentPost.map(item => {
                                    return (
                                        <div className="post_item">
                                            <div className="info">
                                                <img src={item.img} alt="img_post"  />
                                                <span style={{display:"inline-block", marginLeft:"1rem"}}>
                                                    <p id="date">{item.date}</p>
                                                    <p id="name">{item.name.slice(0,13).concat("...")}</p>
                                                </span>
                                            </div>
                                            <Box marginTop={2} marginBottom={2}><Divider /></Box>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="item">
                                <p className="title">Tags</p>
                                <div className="tag_item">
                                    {listTags.map(item => {
                                        return (
                                            <span className="item_tag">
                                                {item.name}
                                            </span>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item sm={8}>
                        <div className="right_blogs">
                            <img src={blogImage} alt="blog_img" id="img_blog"/>
                            <p className="title">Green onion knife and salad placed</p>
                            <div className="info-blog">
                                <span className="info-blog_item">
                                    <span id="icon"><QueryBuilderIcon /></span>
                                    <span>Feb 13, 2021</span>
                                </span>
                                <span className="info-blog_item">
                                    <span id="icon"><PersonOutlineIcon /></span>
                                    <span>By NamNguyen</span>
                                </span>
                                <span className="info-blog_item">
                                    <span id="icon"><ChatBubbleOutlineIcon /></span>
                                    <span>16 comments</span>
                                </span>
                            </div>
                            <div className="info_content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. Aenean massa. Cumtipsu sociis natoque penatibus et magnis dis parturient montesti, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eutu, pretiumem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justotuio, rhoncus ut loret, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Intege
                                </p>
                                <div >
                                    <img src={thumbBlog} alt="thumb_blog" style={{marginRight:"1rem",height:"200px",float:"left"}} />
                                    <span style={{fontWeight:"600"}}>Let the beauty of what you love be what you do.</span>
                                    <br />
                                    <span style={{lineHeight:"1.75"}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters .There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</span>
                                </div>
                                <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. Aenean massa. Cumtipsu sociis natoque penatibus et magnis dis parturient montesti, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eutu, pretiumem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justotuio, rhoncus ut loret, imperdiet a, venenatis vitae, justo. Nullam dictum.
                                </p>
                                <p className="italic_text">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. Aenean massa. Cumtipsu sociis natoque penatibus et magnis dis parturient montesti, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. Aenean massa. Cumtipsu sociis natoque penatibus et magnis dis parturient montesti, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eutu, pretiumem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justotuio, rhoncus ut loret, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>
                                <div className="author_info">
                                    <span className="icon"><FormatQuoteIcon /></span>
                                    <p className="blog_name"><i>Green onion knife and salad placed</i></p>
                                    <p className="author_name">Anil Viradiya</p>
                                </div>
                            </div>
                            <div className="list_social">
                                {listSocial.map(item => {
                                    return (
                                        <span id="social_item" key={item.id}>
                                            {item.icon}
                                        </span>
                                    )
                                })}
                            </div>
                            <div className="list_comment">
                                <div id="quanlity">
                                    <span>16</span>
                                    <span>Comments</span>
                                </div>
                                {listComment.map(item => {
                                    return (
                                        <div className="comment_item" key={item.id}>
                                            <Box marginY={2}><Divider /></Box>
                                            <div className="comment_info">
                                                <span className="abb">{item.reviewer}</span>
                                                <div className="content">
                                                    <p>{item.comment}</p>
                                                    <i>By <span>{item.author_name}</span></i>
                                                    <p className="date">{item.date}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="leave_comment">
                                <p className="title">Leave a Comment</p>
                                <div className="comment_input">
                                    <label>Name *</label>
                                    <input placeholder="Name" />
                                </div>
                                <div className="comment_input">
                                    <label>Email *</label>
                                    <input placeholder="Email" />
                                </div>
                                <div className="comment_input">
                                    <label>Comment *</label>
                                    <textarea placeholder="Message"  ></textarea>
                                </div>
                            </div>
                            <ButtonSecondary content="Post Comment"/>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
export default BlogItem