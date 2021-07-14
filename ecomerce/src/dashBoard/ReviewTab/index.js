import ReactDataGrid from '@inovua/reactdatagrid-enterprise';
import '@inovua/reactdatagrid-enterprise/index.css';
import { Box, Divider, Grid } from "@material-ui/core";
import React from "react";
import Select from 'react-select';
import { columns, dataSource, listShow, listStatus } from "./const";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import "./index.scss";


const renderStar = (number) => {
    let arr= [];
    for(let i =0; i < 5; i++){
        if(i < number) {
            arr.push(<span className="choose"><StarIcon /></span>)
        }else {
            arr.push(<span className="not_choose"><StarIcon /></span>)
        }
    }
    return arr
}

const ReviewTab = (props) => {
    const gridStyle = { minHeight: 750 };
    const parseFunction = (columns) => {
        return columns.map(item => {
            switch (item.name) {
                case "rating" : {
                    return {...item, render : ({value}) => {
                        return renderStar(value)
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
            <div className="review_tab">
                <div className="header">
                    <span>
                        <p className="title">Review List</p>
                        <p className="desc">All review of Customers show in here !</p>
                    </span>
                    <input id="search_input"  type="text" placeholder="Seach item" />
                </div>
                <div className="content">
                    <Grid container spacing={4} style={{width:"100%"}}>
                        <Grid item md={12}>
                            <div className="review_list dashboard_table" >
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
                                    checkboxColumn={true}
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
export default ReviewTab