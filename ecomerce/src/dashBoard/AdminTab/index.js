import React from "react";
import {Grid, TextField, Box, Divider} from "@material-ui/core";
import Select from 'react-select'
import "./index.scss"

import '@inovua/reactdatagrid-enterprise/index.css'
import { listAdmin, listShow, listStatus } from "./const";

const AdminTab = (props) => {
    return (
        <div className="dashboard_item" >
            <div className="admin_tab">
                <div className="header">
                    <span>
                        <p className="title">Admin List</p>
                        <p className="desc">All admin show in here !</p>
                    </span>
                    <input id="search_input"  type="text" placeholder="Seach item" />
                </div>
                <div className="content">
                    <Grid container spacing={4} style={{width:"100%"}}>
                        <Grid item md={12}>
                            <div className="admin_list dashboard_table" >
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
                                <Grid container spacing={4}>
                                    {listAdmin.map(item => {
                                        return (
                                            <Grid item md={3} key={item.id}>
                                                <div className="admin">
                                                    <span className="blue"></span>
                                                        <img src={item.image} alt="image_admin" />
                                                        <div className="info">
                                                            <p className="name">{item.name}</p>
                                                            <div style={{marginTop:"1rem", marginBottom:"1.5rem"}} >
                                                                <p className="id">{`Admin ID: ${item.adminID}`}</p>
                                                                <p className="email">{item.email}</p>
                                                            </div>
                                                            <button className="btn_green-primary">View Details</button>
                                                        </div> 
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
export default AdminTab