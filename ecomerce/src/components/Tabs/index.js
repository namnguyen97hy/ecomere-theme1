import React, { useState } from "react";
import { Tabs,Tab, makeStyles } from "@material-ui/core";
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
      height: "1px",
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

const TabOptions = (props) => {
    const {listTab, type, unit} = props;
    const [valueTab, setValueTab] = useState(0);
    const handleChange = (event, newValue) => {
        setValueTab(newValue);
    };
    const classes = useStyles();
    return(
        <Tabs
            value={valueTab}
            onChange={handleChange}
            variant="standard"
            classes={{ indicator: classes.indicator }}
        >
            {listTab.map(item =>{
            return <Tab 
                label={`${item[type]} ${unit} `} 
                key={item.id} 
                classes={{
                    root: classes.tabRoot,
                    selected: classes.tabSelected,
                    wrapper: classes.alignment,
            }}
            />
        })}
        </Tabs>
    )
}
export default TabOptions