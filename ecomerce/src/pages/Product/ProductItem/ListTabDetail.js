import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Tabs, Tab, Divider, Box} from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FacebookIcon from '@material-ui/icons/Facebook';
import tableData from "./../../../assets/images/table_data.JPG"

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
    fontWeight:"500"
  },
  main : {
    display:"flex",
    justifyContent:"center",
    margin:"4rem 0 3rem 0"
  },
  indicator: {
    backgroundColor: "#c18c2f",
    height: "2px",
    overflowX:"auto"
  },
  tabRoot: {
    // textTransform: "initial",
    marginRight: "10px",
    fontSize:"15px",
    minWidth: "50px",
    color: "#333",
    fontWeight: "550",
    padding: "12px 13px 12px 13px",
    position:"relative",
    "&:after" : {
      position:'absolute',
      content:'',
      height:"100%",
      width:"2px",
      // backgroundColor:"#c18c2f"
    },
    "&:hover": {
      color: "#C18C2F",
      opacity: 1,
    },
    "&$tabSelected": {
      color: "#C18C2F",
    },
    "&:focus": {
      color: "#C18C2F",
    },
  },
  tabSelected: {
    borderBottom: "1px solid #C18C2F",
  },
  desc_li:{
      display:"block"
  }
});

const description = {
    listMoreDetail :  [
        {
            id:1,
            content:"Lorempicsum manchestter liverpool sweeden england spain croatia "
        },
        {
            id:2,
            content:"Lorempicsum manchestter manchestter liverpool sweeden spain croatia "
        },
        {
            id:3,
            content:"Lorempicsum manchestter liverpool sweeden england manchestter liverpool sweeden"
        },
        {
            id:4,
            content:"manchestter liverpool sweeden liverpool sweeden england spain croatia "
        },
        {
            id:5,
            content:"Lorempicsum manchestter liverpool sweeden liverpool sweeden england spain croatia "
        },
    ],
    listKeySpecification: [
        {
            id:1,
            content:"Lorempicsum manchestter liverpool sweeden england spain croatia "
        },
        {
            id:2,
            content:"Lorempicsum manchestter manchestter liverpool sweeden spain croatia "
        },
        {
            id:3,
            content:"Lorempicsum manchestter liverpool sweeden england manchestter liverpool sweeden"
        },
        {
            id:4,
            content:"manchestter liverpool sweeden liverpool sweeden england spain croatia "
        },
        {
            id:5,
            content:"Lorempicsum manchestter liverpool sweeden liverpool sweeden england spain croatia "
        },
    ]
}

export default function ListTabDetail() {
  const classes = useStyles();
  const [valueTab, setValueTab] = React.useState(0);
  const [isShowTableView, setShowTableReview] = useState(false)

  const handleChange = (event, newValue) => {
    setValueTab(newValue);
  };
  const renderTab = () => {
      const { id } = listTab[valueTab];
      switch (id) {
        case 0 :
            return (
                <div className="description">
                    <h4>More Detail</h4>
                    <ul className="list_desc">
                        {description.listMoreDetail.map(item => {
                            return (<li key={item.id} className="desc_li">
                                <span ><FiberManualRecordIcon /></span>
                                <span>{item.content}</span>
                            </li>)
                        })}
                    </ul>
                    <h4>Key Specification</h4>
                    <ul className="list_desc">
                        {description.listKeySpecification.map(item => {
                            return (<li key={item.id} className="desc_li">
                                <span ><FiberManualRecordIcon /></span>
                                <span>{item.content}</span>
                            </li>)
                        })}
                    </ul>
                </div>
            )
        case 1:
            return (
                <div className="reviews">
                    <h4>Customer Reviews</h4>
                    <p>No Review Yet</p>
                    <p className="write" onClick={() => setShowTableReview(!isShowTableView)}>Write a review</p>
                    <Box className={`table_review ${isShowTableView ? "show" : ""}`}>
                        <Box marginY={2}><Divider /></Box>
                        <h4>Write a review</h4>
                        <div className="input_field">
                            <label>Name</label>
                            <input className="input_text" placeholder="Enter your name !" />
                        </div>
                        <div className="input_field">
                            <label>Email</label>
                            <input className="input_text" placeholder="abc@gmail.com" />
                        </div>
                        <div className="input_field">
                            <label>Rating</label>
                            <div className="rating">
                                <span><StarBorderIcon /></span>
                                <span><StarBorderIcon /></span>
                                <span><StarBorderIcon /></span>
                                <span><StarBorderIcon /></span>
                                <span><StarBorderIcon /></span>
                            </div>
                        </div>
                        <div className="input_field">
                            <label>Review title</label>
                            <input className="input_text" placeholder="Give your title review here !" />
                        </div>
                        <div className="input_field">
                            <label>Body of review (1500)</label>
                            <textarea className="area_text" placeholder="Write your comment here !">
                            </textarea>
                        </div>
                        <p className="write" style={{float:"right",marginRight:"-1rem"}}>Submit Review</p>
                    </Box>
                </div>
            )
        case 2: 
            return (
                <div className="video">
                    <iframe 
                        width="100%"
                        height="750" 
                        src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>
                </div>
            )
        case 3:
            return (
                <div className="comments">
                    <div className="quanlity">
                        <p>0 comments</p>
                        <span>
                            Sort by : 
                            <select style={{marginLeft:"0.5rem"}}>
                                <option> Newest </option>
                                <option> Oldest </option>
                            </select>
                        </span>
                    </div>
                    <Box marginY={3}><Divider /></Box>
                    <div className="input_comment">
                        <input placeholder="Add a comment" />
                    </div>
                    <Box marginY={3}><Divider /></Box>
                    <div className="fb">
                        <span><FacebookIcon /></span>
                        <span >Facebook Comments Plugin</span>
                    </div>
                </div>
            )
        case 4:
            return (
                <div className="size_chart">
                    <img src={tableData} />
                </div>
            )
        default :
            break;
      }
  }
  const listTab = [
    {
      id:0,
      label:"DESCRIPTION"
    },
    {
      id:1,
      label:"REVIEWS"
    },
    {
      id:2,
      label:"VIDEO"
    },
    {
      id:3,
      label:"COMMENTS"
    },
    {
      id:4,
      label:"SIZE CHART"
    },
  ]

  return (
      <div className="listTab">
        <div class={classes.main}>
            <Tabs
                value={valueTab}
                onChange={handleChange}
                variant="standard"
                classes={{ indicator: classes.indicator }}
            >
                {listTab.map(item =>{
                return <Tab 
                    label={item.label} 
                    key={item.id} 
                    classes={{
                        root: classes.tabRoot,
                        selected: classes.tabSelected,
                        wrapper: classes.alignment,
                }}
                />
            })}
            </Tabs>
        </div>
        {renderTab()}
      </div>
  );
}
