import { Grid, Accordion, AccordionSummary, AccordionDetails, Menu, MenuItem, Divider,Box} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./index.scss";
import logo from "../assets/images/logo.png";
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import { listMenuTab } from "./const";
import NotificationsIcon from '@material-ui/icons/Notifications';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import PublicIcon from '@material-ui/icons/Public';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import ReceiptIcon from '@material-ui/icons/Receipt';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import UsaFlag from "../assets/images/flag-us.png";
import FranceFlag from "../assets/images/flag-fr.png"
import ChinaFlag from "../assets/images/flag-cn1.png"
import { useHistory, useRouteMatch } from "react-router-dom";

const DashBoard = (props) => {
    // khai bao prop
    const {renderChildren} = props;

    // khai bao state
    const [shrinkMenu, setShrinkMenu] = useState(false);
    const [isShowLangExtend, setShowLangExtend] = useState(false);
    const [isShowSettingExtend, setShowSettingExtend] = useState(false);
    const [tabName, setTabName] = useState('');

    // khai bao cac hook khac
    const history = useHistory();
    const routeMatch = useRouteMatch();
    const params = routeMatch.path.substring(routeMatch.path.lastIndexOf("/") + 1);

    useEffect(() => {
        setTabName(params)
    },[tabName])

    return (
        <div className="dashboard">
            <Grid container spacing={0}>
                <Grid item md={shrinkMenu ? 1: 2}>
                    <div className="menu">
                        <div className="header">
                            <img src={logo} alt="logo" id={shrinkMenu ? "hidden" : ""} />
                            <span onClick={() => setShrinkMenu(!shrinkMenu)} className={shrinkMenu ? "ml-1" : ""}><MenuOpenIcon /></span>
                        </div>
                        <div className="menu_container">
                            {listMenuTab.map(item => {
                                return (
                                    <div className={`tab_menu ${item.extends ? "extend_tab" : ""}`} 
                                        id={tabName === item.tabName.toLowerCase() ? "active" : ""} 
                                        onClick={() => {
                                            setTabName(item.tabName.toLowerCase());
                                            history.push(`/vegist-backend/${item.tabName.toLowerCase()}`)
                                        }} 
                                        key={item.id}
                                    >
                                        {item.extends ? 
                                            <Accordion>
                                                <AccordionSummary
                                                    expandIcon={!shrinkMenu ? <ExpandMoreIcon /> : ""}
                                                >
                                                    <>
                                                        <span className="icon">{item.icon}</span>
                                                        <span className="tab_name" id={shrinkMenu ? "hidden" : ""}>{item.tabName}</span>
                                                    </>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <ul className="ul_menu" id={shrinkMenu ? "hidden" : ""}>
                                                        {item.extendMenu.map(x => {
                                                            return (
                                                                <li className="li_menu" key={x.id}>{x.tabName}</li>
                                                            )
                                                        })}
                                                    </ul>
                                                </AccordionDetails>
                                            </Accordion>
                                            : 
                                            <>
                                                <span className="icon">{item.icon}</span>
                                                <span className="tab_name" id={shrinkMenu ? "hidden" : ""}>{item.tabName}</span>         
                                            </>
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </Grid>
                <Grid item md={shrinkMenu ? 11: 10}>
                    <div className="nav">
                        <div className="search_input">
                            <input type="text" placeholder="Seach item" />
                            <span><SearchIcon /></span>
                        </div>
                        <div className="btn_actions">
                            <ul className="list_action">
                                <li className="action_item ">
                                    <span className="ring icon"><NotificationsIcon /></span>
                                    <span className="number">3</span>
                                </li>
                                <li className="action_item">
                                    <span className="icon"><NightsStayIcon /></span>
                                </li>
                                <li className="action_item">
                                    <span className="icon" onClick={() => setShowLangExtend(!isShowLangExtend)} id={isShowLangExtend ? "active" : ""}>
                                        <span><PublicIcon/></span>
                                        <span style={{marginLeft:"-0.25rem"}}><ArrowDropDownIcon /></span>
                                    </span>
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={isShowLangExtend}
                                        keepMounted
                                        open={isShowLangExtend}
                                        onClose={() => {setShowLangExtend(false)}}
                                        className="lang_extends"
                                    >
                                        <MenuItem onClick={() => {setShowLangExtend(false)}}>
                                            <span className="item_extend">
                                                <img src={UsaFlag} alt="usa_flag" />
                                                <span>English</span>
                                            </span>
                                        </MenuItem>
                                        <MenuItem onClick={() => {setShowLangExtend(false)}}>
                                            <span className="item_extend">
                                                <img src={FranceFlag} alt="fr_flag" />
                                                <span>France</span>
                                            </span>
                                        </MenuItem>
                                        <MenuItem onClick={() => {setShowLangExtend(false)}}>
                                            <span className="item_extend">
                                                <img src={ChinaFlag} alt="china_flag" />
                                                <span>China</span>
                                            </span>
                                        </MenuItem>
                                    </Menu>
                                </li>
                                <li className="action_item">
                                    <span className="icon" onClick={() => setShowSettingExtend(!isShowSettingExtend)} id={isShowSettingExtend ? "active" : ""}>
                                        <span><AccountCircleIcon /></span>
                                        <span style={{marginLeft:"-0.25rem"}}><ArrowDropDownIcon /></span>
                                    </span>
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={isShowSettingExtend}
                                        keepMounted
                                        open={isShowSettingExtend}
                                        onClose={() => {setShowSettingExtend(false)}}
                                        className="settings"
                                    >
                                        <MenuItem onClick={() => {setShowSettingExtend(false)}}>
                                            <span className="item_extend">
                                                <span className="icon"><PersonOutlineIcon /></span>
                                                <span>Edit Profile</span>
                                            </span>
                                        </MenuItem>
                                        <MenuItem onClick={() => {setShowSettingExtend(false)}}>
                                            <span className="item_extend">
                                                <span className="icon"><SettingsIcon /></span>
                                                <span>Setting</span>
                                            </span>
                                        </MenuItem>
                                        <MenuItem onClick={() => {setShowSettingExtend(false)}}>
                                            <span className="item_extend">
                                                <span className="icon"><AccountBalanceWalletIcon /></span>
                                                <span>Wallet</span>
                                            </span>
                                        </MenuItem>
                                        <MenuItem onClick={() => {setShowSettingExtend(false)}}>
                                            <span className="item_extend">
                                                <span className="icon"><ReceiptIcon /></span>
                                                <span>Billing</span>
                                            </span>
                                        </MenuItem>
                                        <MenuItem onClick={() => {setShowSettingExtend(false)}}>
                                            <span className="item_extend">
                                                <span className="icon"><HelpOutlineIcon /></span>
                                                <span>Helper Center</span>
                                            </span>
                                        </MenuItem>
                                        <MenuItem onClick={() => {setShowSettingExtend(false)}}>
                                            <Box><Divider /></Box>
                                            <span className="item_extend logout">
                                                <span className="icon"><ExitToAppIcon /></span>
                                                <span>Logout</span>
                                            </span>
                                        </MenuItem>
                                    </Menu>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {renderChildren()}
                </Grid>
            </Grid>
        </div>
    )
}
export default DashBoard