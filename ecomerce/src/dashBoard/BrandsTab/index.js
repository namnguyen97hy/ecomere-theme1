import '@inovua/reactdatagrid-enterprise/index.css';
import { Box, Divider, Grid, TextField } from "@material-ui/core";
import React from "react";
import Select from 'react-select';
import { listCategories } from "../OrderTab/const";
import { listAdmin, listBrands } from "./const";
import "./index.scss";


const BrandsTab = (props) => {
    return (
        <div className="dashboard_item" >
            <div className="brand_tab">
                <div className="header">
                    <span>
                        <p className="title">BrandsTab</p>
                        <p className="desc">All brands of providers show in here !</p>
                    </span>
                    <button className="btn_green-primary">Add Brands</button>
                </div>
                <div className="content">
                    <Grid container spacing={4} style={{width:"100%"}}>
                        <Grid item md={12}>
                            <div className="brand_list dashboard_table" >
                                <div className="filter" style={{marginTop:"0.5rem"}}>
                                    <input id="search_input" type="text" placeholder="Seach item" />
                                    <span className="right" style={{display:"flex"}} >
                                        <Select 
                                            options={listCategories}  
                                            placeholder="All categories ..."
                                            className="cate"
                                            style={{height:"50px"}}
                                        />
                                        <TextField
                                            id="date"
                                            type="date"
                                            className="date_picker"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />

                                    </span>
                                </div>
                                <Box marginX={-2} marginBottom={2} marginTop={3}><Divider /></Box>
                                <Grid container spacing={4}>
                                    {listBrands.map(item => {
                                        return (
                                            <Grid item md={2} key={item.id}>
                                                <div className="brand">
                                                    <img src={item.image} alt="brand_img" style={{margin:"0 auto", width:"100%"}}/>
                                                    <Box marginY={2}><Divider /></Box>
                                                    <p className="name">{item.name}</p>
                                                    <p className="quanlity">{`${item.quanlityItem} items`}</p>
                                                </div>
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}
export default BrandsTab