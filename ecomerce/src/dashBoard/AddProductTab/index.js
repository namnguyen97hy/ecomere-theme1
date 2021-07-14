import '@inovua/reactdatagrid-enterprise/index.css';
import { Box, Checkbox, Divider, Grid } from "@material-ui/core";
import React from "react";
import ImageSvg from "../../assets/images/image_svg.svg";
import "./index.scss";

const AddProductTab = (props) => {
    return (
        <div className="dashboard_item" >
            <div className="add-product_tab">
                <Grid container >
                    <Grid item md={9}>
                        <div className="header">
                            <span>
                                <p className="title">Add NewProduct</p>
                            </span>
                            <button className="btn_green-primary">Publish</button>
                        </div>
                    </Grid>
                </Grid>
                <div className="content">
                    <Grid container spacing={4} style={{width:"100%"}}>
                        <Grid item md={6}>
                            <div className="add-product_list dashboard_table" >
                                <p className="title_table">Basic</p>
                                <Box marginX={-2} marginBottom={2} marginTop={3}><Divider /></Box>
                                <div className="input_field">
                                    <label>Product title</label>
                                    <input id="search_input" className="max_width"  type="text" placeholder="Type here" />
                                </div>
                                <div className="input_field">
                                    <label>Full Description</label>
                                    <textarea 
                                        id="search_input" 
                                        className="max_width"  
                                        type="text" 
                                        placeholder="Type here"
                                        style={{fontFamily:"Spartan",height:"120px",resize:"none", fontSize:"14.5px", fontWeight:"500"}} 
                                    />
                                </div>
                                <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", margin:"-1.5rem 0"}}>
                                    <div className="input_field">
                                        <label>Regular Price</label>
                                        <input id="search_input" className="max_width"  type="text" placeholder="$" />
                                    </div>
                                    <div className="input_field" style={{margin:"0 1rem"}}>
                                        <label>Sale Price</label>
                                        <input id="search_input" className="max_width"  type="text" placeholder="$" />
                                    </div>
                                    <div className="input_field" style={{flex:"30%"}}>
                                        <label>Currency</label>
                                        <select id="search_input" className="max_width" >
                                            <option>VND</option>
                                            <option>USD</option>
                                            <option>Tệ</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="input_field">
                                    <label>Tax Rate</label>
                                    <input id="search_input" className="max_width"  type="text" placeholder="%" />
                                </div>
                                <div className="input_field">
                                    <Checkbox
                                        // checked={state.checkedB}
                                        // onChange={handleChange}
                                        name="make_template"
                                        color="primary"
                                    />
                                    <span>Make a template</span>
                                </div>
                            </div>
                            <div className="add-product_list dashboard_table" >
                                <p className="title_table">Shipping</p>
                                <Box marginX={-2} marginBottom={2} marginTop={3}><Divider /></Box>
                                <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", margin:"-1.5rem 0"}}>
                                    <div className="input_field">
                                        <label>Width</label>
                                        <input id="search_input" className="max_width"  type="text" placeholder="cm" />
                                    </div>
                                    <div className="input_field" >
                                        <label>Height</label>
                                        <input id="search_input" className="max_width"  type="text" placeholder="cm" />
                                    </div>
                                </div>
                                <div className="input_field">
                                        <label>Weight</label>
                                        <input id="search_input" className="max_width"  type="text" placeholder="g" />
                                </div>
                                <div className="input_field">
                                        <label>Shipping fee</label>
                                        <input id="search_input" className="max_width"  type="text" placeholder="$" />
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={3}>
                            <div className="add-product_list dashboard_table" >
                                <p className="title_table">Media</p>
                                <Box marginX={-2} marginBottom={2} marginTop={3}><Divider /></Box>
                                <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
                                    <img src={ImageSvg} alt="image_svg" style={{width:"120px"}}/>
                                    <span>
                                        <label for="file-upload" className="custom-file-upload">
                                            Upload file
                                        </label>
                                        <input id="file-upload" type="file"/>
                                    </span>
                                </div>
                            </div>
                            <div className="add-product_list dashboard_table" >
                                <p className="title_table">Organiration</p>
                                <Box marginX={-2} marginBottom={2} marginTop={3}><Divider /></Box>
                                <div className="input_field" >
                                    <label>Categories</label>
                                    <select id="search_input" className="max_width" >
                                        <option>Juice</option>
                                        <option>Fish</option>
                                        <option>Meat</option>
                                        <option>Vegetable</option>
                                        <option>Fruits</option>
                                        <option>Beverage</option>
                                        <option>Breakfast</option>
                                    </select>
                                </div>
                                <div className="input_field" >
                                    <label>Tags</label>
                                    <input id="search_input" className="max_width"  type="text" placeholder="Tag" />
                                </div>
                            </div>

                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}
export default AddProductTab