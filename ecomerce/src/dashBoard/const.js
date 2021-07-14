import HomeIcon from '@material-ui/icons/Home';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import StarsIcon from '@material-ui/icons/Stars';
import SettingsIcon from '@material-ui/icons/Settings';
export const listMenuTab = [
    {
        id:0,
        icon: <HomeIcon />,
        tabName:"DashBoard",
        extends: false
    },
    {
        id:1,
        icon:<LocalMallIcon />,
        tabName:"Product",
        extends: true,
        extendMenu: [
            {
                id:"1_1",
                tabName:"List Product"
            },
            {
                id:"1_2",
                tabName:"Grid Product"
            },
            {
                id:"1_3",
                tabName:"Categories Product"
            }
        ]
    },
    {
        id:2,
        icon:<ShoppingCartIcon />,
        tabName:"Order",
        extends: false,
    },
    {
        id:3,
        icon:<SupervisorAccountIcon />,
        tabName:"Admin",
        extends: false,
    },
    {
        id:4,
        icon:<AddToPhotosIcon />,
        tabName:"Add Product",
        extends: false,
    },
    {
        id:5,
        icon:<MonetizationOnIcon />,
        tabName:"Transactions",
        extends: false,
    },
    {
        id:6,
        icon:<PersonOutlineOutlinedIcon />,
        tabName:"Accounts",
        extends: false,
    },
    {
        id:7,
        icon:<RateReviewOutlinedIcon />,
        tabName:"Reviews",
        extends: false,
    },
    {
        id:8,
        icon:<StarsIcon />,
        tabName:"Brands",
        extends: false,
    },
    {
        id:9,
        icon:<SettingsIcon />,
        tabName:"Settings",
        extends: false,
    },

]

export const listTabName = {
    DASHBOARD: "DashBoard",
    PRODUCT: "Product",
    ORDER:"Order",
    ADMIN:"Admin",
    ADD_PRODUCT:"Add Product",
    TRANSACTIONS:"Transactions",
    ACCOUNT:"Accounts",
    REVIEWS:'Reviews',
    BRANDS:"Brands",
    SETTINGS:"Settings"
}
