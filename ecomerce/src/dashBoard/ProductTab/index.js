import React from "react";
import {Grid, TextField, Box, Divider} from "@material-ui/core";
import Select from 'react-select'
import "./index.scss"
import ReactDataGrid from '@inovua/reactdatagrid-enterprise';

import '@inovua/reactdatagrid-enterprise/index.css'
import { columns, dataSource, listCategories, listStatus } from "./const";

const ProductTab = (props) => {
    const gridStyle = { minHeight: 750 };
    const parseFunction = (columns) => {
        return columns.map(item => {
            switch (item.name) {
                case "product_name" : {
                    return {...item, render : ({data}) => {
                        return (
                            <span style={{display:"flex", alignItems:"center"}}>
                                <img src={data.image} style={{width:"60px", height:"60px", marginRight: "1rem"}} alt="image_prd" />
                                <span style={{fontSize:"15px", fontWeight:"550"}}>{data.name}</span>
                            </span>
                        )}}
                }
                case "status" : {
                    return {...item, render : ({value}) => {
                        if(value === "active") {
                            return <span className="paid" >{value}</span>
                        }else if(value === "disable") {
                            return <span className="checking" >{value}</span>
                        }else {
                            return <span className="refund" >{value}</span>
                        }
                    }}
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
            < div className="product_tab">
                <div className="header">
                    <span>
                        <p className="title">Product List</p>
                        <p className="desc">All product and categori Product</p>
                    </span>
                    <button className="btn_green-primary" style={{marginRight:"2rem"}}>Create New</button>
                </div>
                <div className="content">
                    <Grid container spacing={4} style={{width:"100%"}}>
                        <Grid item md={12}>
                            <div className="product_list dashboard_table" >
                                <div className="filter" style={{marginTop:"0.5rem"}}>
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
                                <Box marginX={-2} marginBottom={2} marginTop={3}><Divider /></Box>
                                <ReactDataGrid
                                    idProperty="id"
                                    columns={parseFunction(columns)}
                                    style={gridStyle}
                                    pagination
                                    dataSource={dataSource}
                                    defaultLimit={10}
                                    showHeader={false}
                                    showCellBorders="horizontal"
                                    checkboxColumn={true}
                                    rowHeight={100}
                                />
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}
export default ProductTab