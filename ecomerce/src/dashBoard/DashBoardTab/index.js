import { Grid, LinearProgress, TextField } from "@material-ui/core";
import React from "react";
import "./index.scss"
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Select from 'react-select'
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import CropFreeIcon from '@material-ui/icons/CropFree';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import ArrowRightAltSharpIcon from '@material-ui/icons/ArrowRightAltSharp';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import { listMember, listRecentActivity, listSocialMarketingPercent, listCategories, listStatus, dataSource, columns } from "./const";
import ReactDataGrid from '@inovua/reactdatagrid-enterprise'
import '@inovua/reactdatagrid-enterprise/index.css'

const gridStyle = { minHeight: 550 }
const DashBoardTab = (props) => {
    const parseFunction = (columns) => {
        return columns.map(item => {
            switch (item.name) {
                case "orderID" : {
                    return {...item, render : ({value}) => {
                        return <span>{value}</span>
                    }}
                }
                case "paymentStatus" : {
                    return {...item, render : ({value}) => {
                        if(value === "Paid") {
                            return <span className="paid" >{value}</span>
                        }else if(value === "Checking") {
                            return <span className="checking" >{value}</span>
                        }else {
                            return <span className="refund" >{value}</span>
                        }
                    }}
                }
                case "paymentMethod" : {
                    return {...item, render: ({ value }) => {
                        return (
                            <span style={{display:"flex",alignItems:"center"}}>
                                <span style={{display:"inline-block", marginRight:"0.5rem"}}><CreditCardIcon /></span>
                                {value}
                            </span>
                        )}}
                }
                case "action" : {
                    return {...item}
                }
                default : 
                    return {...item, render : ({value}) => {
                        return <span>{value}</span>
                    }}
        
        }})
    }
    return (
        <div className="dashboard_item" >
            <div className="dashboard_tab">
                <div className="header">
                    <span>
                        <p className="title">Dashboard</p>
                        <p className="desc">Whole data about your business here</p>
                    </span>
                </div>
                <div className="content">
                    <Grid container spacing={4} style={{width:"100%"}}>
                        <Grid item lg={3}>
                            <div className="summary_item dashboard_table">
                                <div className="icon">
                                    <MonetizationOnIcon />
                                </div>
                                <div className="info">
                                    <p className="name_table">Revenue</p>
                                    <p className="value">$12645.5</p>
                                    <p className="desc">Shipping fees are not included</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg={3}>
                            <div className="summary_item dashboard_table">
                                <div className="icon">
                                    <LocalShippingIcon />
                                </div>
                                <div className="info">
                                    <p className="name_table">Order</p>
                                    <p className="value">55000</p>
                                    <p className="desc">Excluding orders in transit</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg={3}>
                            <div className="summary_item dashboard_table">
                                <div className="icon">
                                    <CropFreeIcon />
                                </div>
                                <div className="info">
                                    <p className="name_table">Products</p>
                                    <p className="value">9872</p>
                                    <p className="desc">In 19 Categories</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg={3}>
                            <div className="summary_item dashboard_table">
                                <div className="icon">
                                    <ShoppingBasketIcon />  
                                </div>
                                <div className="info">
                                    <p className="name_table">Monthly Earning</p>
                                    <p className="value">$5645.5</p>
                                    <p className="desc">Based in your local time</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg={8}>
                            <div className="sale_statistic dashboard_table">
                                <p className="name_table">Sale statistic</p>
                            </div>
                        </Grid>
                        <Grid item lg={4}>
                            <div className="reveune_base dashboard_table">
                                <p className="name_table">Revenue Base on Area</p>
                            </div>
                        </Grid>
                        <Grid item lg={3}>
                            <div className="new_members dashboard_table">
                                <p className="name_table">New Members</p>
                                {listMember.map(item => {
                                    return (
                                        <div className="member" key={item.id}>
                                            <span className="info">
                                                <img src={item.image} alt="image_member" />
                                                <span>
                                                    <p className="name">{item.name}</p>
                                                    <p className="address">{item.address}</p>
                                                </span>
                                            </span>
                                            <button class="add_btn">+ Add</button>
                                        </div>
                                    )
                                })}
                            </div>
                        </Grid>
                        <Grid item lg={5}>
                            <div className="recent_activity dashboard_table">
                                <p className="name_table">Recent Acticity</p>
                                {listRecentActivity.map(item => {
                                    return (
                                        <div className="activity_item" key={item.id}>
                                            <span className="icon_li" id={item.active ? "active" : ""}><PlayCircleOutlineIcon /></span>
                                            <span className="time">{item.time}</span>
                                            <span className="icon_arrow"><ArrowRightAltSharpIcon /></span>
                                            <span className="content">{item.activity}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </Grid>
                        <Grid item lg={4}>
                            <div className="social_marketing dashboard_table">
                                <p className="name_table">Social Marketing</p>
                                {listSocialMarketingPercent.map(item => {
                                    return (
                                        <div className="social_progress">
                                            <p className="social_name">{item.name}</p>
                                            <LinearProgress variant="determinate" {...props} value={item.value} />
                                            <span className="percent">{`${item.value} %`}</span>
                                        </div>  
                                    )
                                })}
                            </div>
                        </Grid>
                        <Grid item lg={12}>
                            <div className="latest_order dashboard_table">
                                <p className="name_table">Latest Order</p>
                                <div className="filter">
                                    <Select 
                                        options={listCategories}  
                                        placeholder="All categories ..."
                                        className="cate"
                                    />
                                    <span className="right" >
                                        <TextField
                                            id="date"
                                            type="date"
                                            className="date_picker"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        <span>
                                            <Select 
                                                options={listStatus}  
                                                placeholder="Status"
                                                className="status"
                                            />
                                        </span>
                                    </span>
                                </div>
                                <ReactDataGrid
                                    idProperty="id"
                                    columns={parseFunction(columns)}
                                    style={gridStyle}
                                    pagination
                                    dataSource={dataSource}
                                    defaultLimit={10}
                                    checkboxColumn={true}
                                />
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}
export default DashBoardTab