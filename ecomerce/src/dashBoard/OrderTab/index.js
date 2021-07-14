import React from "react";
import {Grid, TextField, Box, Divider} from "@material-ui/core";
import Select from 'react-select'
import "./index.scss"
import ReactDataGrid from '@inovua/reactdatagrid-enterprise';

import '@inovua/reactdatagrid-enterprise/index.css'
import { columns, dataSource, listCategories, listShow, listStatus } from "./const";

const OrderTab = (props) => {
    const gridStyle = { minHeight: 750 };
    const parseFunction = (columns) => {
        return columns.map(item => {
            switch (item.name) {
                case "status" : {
                    return {...item, render : ({value}) => {
                        if(value === "received") {
                            return <span className="paid" >{value}</span>
                        }else if(value === "cancel") {
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
            <div className="order_tab">
                <div className="header">
                    <span>
                        <p className="title">Order List</p>
                        <p className="desc">All order of Customers show in here !</p>
                    </span>
                    <input id="search_input"  type="text" placeholder="Seach item" />
                </div>
                <div className="content">
                    <Grid container spacing={4} style={{width:"100%"}}>
                        <Grid item md={12}>
                            <div className="order_list dashboard_table" >
                                <div className="filter" style={{marginTop:"0.5rem"}}>
                                    <input id="search_input" type="text" placeholder="Seach item" />
                                    <span className="right" >
                                        <Select 
                                            options={listStatus}  
                                            placeholder="Status"
                                            className="status"
                                        />
                                        <Select 
                                            options={listShow}  
                                            placeholder="Show"
                                            className="status"
                                        />

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
                                    showCellBorders="horizontal"
                                    // checkboxColumn={true}
                                    rowHeight={60}
                                />
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}
export default OrderTab