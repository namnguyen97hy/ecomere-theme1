import Member1 from "../../assets/images/member_avatar1.jpg";
import Member2 from "../../assets/images/member_avatar2.jpg";
import Member3 from "../../assets/images/member_avatar3.jpg";
export const listMember = [
    {
        id:0,
        name:"David Beckham",
        image: Member1,
        address:"London"
    },
    {
        id:1,
        name:"Kevin Druyner",
        image: Member2,
        address:"Belgium"
    },
    {
        id:2,
        name:"Angolo Kante",
        image: Member3,
        address:"France"
    },
]
export const listRecentActivity = [
    {
        id:0,
        time: "Today",
        active: true,
        activity: "Make DashBoard theme"
    },
    {
        id:1,
        time: "Mar 12",
        activity: "Add New Categories Product"
    },
    {
        id:2,
        time: "Mar 3",
        activity: "Fix Image Item"
    },
    {
        id:3,
        time: "Jan 20",
        activity: "Get Revenue of lastmonth"
    },
    {
        id:4,
        time: "Jan 1",
        activity: "Open Shop online "
    },
]
export const listSocialMarketingPercent = [
    {
        id:0,
        value: 15,
        name:"Facebook"
    },
    {
        id:1,
        value: 25,
        name:"Instagram"
    },
    {
        id:4,
        value: 35,
        name:"Twitter"
    },
    {
        id:2,
        value: 18,
        name:"Google"
    },
    {
        id:3,
        value: 40,
        name:"Ads"
    },
]
export const listCategories = [
    {
        label:"Breakfast",
        value:"breakfast"
    },
    {
        label:"Fruits",
        value:"fruits"
    },
    {
        label:"Beverage",
        value:"Beverage"
    },
    {
        label:"Meat and fish",
        value:"meat_and_fish"
    },
    {
        label:"Beef",
        value:"beef"
    },
    {
        label:"Juice",
        value:"juice"
    },
    {
        label:"Palcon",
        value:"palcon"
    },
    {
        label:"Chicken",
        value:"chicken"
    },
    {
        label:"Vegetable",
        value:"vegetable"
    },
    {
        label:"Seafood",
        value:"seafood"
    },
    {
        label:"Noddle",
        value:"Noddle"
    },
    {
        label:"Sampanh",
        value:"sampanh"
    },

]
export const listStatus = [
    {
        label:"All",
        value:"all"
    },
    {
        label:"Paid",
        value:"paid"
    },
    {
        label:"Checking",
        value:"checking"
    },
    {
        label:"Refund",
        value:"refund"
    },
    
]
const headerStyle = {
    background:"#f8f9fa",
    color:"#383e50",
    padding:"0.25rem 0"

}
const buttonStyle = {
    color:"white", 
    borderRadius:"5px", 
    background:"#088178",
    textAlign:"center",
    padding:"0.5rem 1rem",
    textAlign:"center" ,
    border:"none"
}
export const columns = [
    { 
        id:"orderID",
        name: 'orderID',
        defaultWidth: 120, 
        headerProps: { style: headerStyle },
        header: 'OrderID' ,
        style: {color:"#088f78", fontWeight:"600"}
        // render: ({value}) => {
        //     return <span>{value}</span>
        // }
    },
    { 
        id:"billingName",
        name: 'billingName', 
        defaultFlex: 200,
        headerProps: { style: headerStyle }, 
        header: 'Billing Name' ,
        // render: ({value}) => {
        //     return <span>{value}</span>
        // }
    },
    {
        id:"date",
        name: 'date',
        header: 'Date',
        headerProps: { style: headerStyle },
        defaultWidth:150,
        // render: ({ value }) => {
        //     return <p onClick={() => console.log(value)}>{value}</p>
        // }
    },
    { 
        id: 'total',
        name:"total", 
        header: 'Total',
        headerProps: { style: headerStyle }, 
        minWidth: 120, 
        defaultFlex: 1, 
        // render: ({value}) => {
        //     return <span>{value}</span>
        // }
    },
    {
        id:"payment status",
        name: 'paymentStatus',
        header: 'Payment Status',
        headerProps: { style: headerStyle },
        defaultWidth: 180,
        // render: ({ value }) => <span style={{ color: value ==="Paid" ? 'lightgreen' : 'inherit'}}>{value}</span>
    },
    {
        id:"payment method",
        name: 'paymentMethod',
        header: 'Payment Method',
        headerProps: { style: headerStyle },
        defaultWidth: 180,
        // render: ({ value }) => <span style={{ color: value ==="Paid" ? 'lightgreen' : 'inherit'}}>{value}</span>
    },
    {
        id:"action",
        name: 'action',
        header: 'Action',
        headerProps: { style: headerStyle },
        defaultWidth: 150,
        render: ({ value }) => <button style={buttonStyle}>Delete item</button>
    },
]

  
export const dataSource = [
    {id:0, orderID:"#43436", billingName:"David", date:"20 Jan, 2021", total: "960$", paymentStatus: "Paid", paymentMethod:"Visa"},
    {id:1, orderID:"#43423", billingName:"Kane", date:"22 Jan, 2021", total: "120$", paymentStatus: "Checking", paymentMethod:"Momo"},
    {id:2, orderID:"#12436", billingName:"Stegen", date:"12 Feb, 2021", total: "230$", paymentStatus: "Refund", paymentMethod:"Visa"},
    {id:3, orderID:"#45436", billingName:"Casilas", date:"08 Jan, 2021", total: "234$", paymentStatus: "Checking", paymentMethod:"Visa"},
    {id:4, orderID:"#76436", billingName:"Messi", date:"11 Apr, 2021", total: "541$", paymentStatus: "Paid", paymentMethod:"Momo"},
    {id:5, orderID:"#22436", billingName:"Kante", date:"23 Jan, 2021", total: "234$", paymentStatus: "Checking", paymentMethod:"Visa"},
    {id:6, orderID:"#14436", billingName:"Son", date:"21 Nov, 2021", total: "310$", paymentStatus: "Paid", paymentMethod:"Visa"},
    {id:7, orderID:"#24436", billingName:"Xavi", date:"15 Jan, 2021", total: "541$", paymentStatus: "Checking", paymentMethod:"Visa"},
    {id:8, orderID:"#43345", billingName:"Louis", date:"17 Jan, 2021", total: "125$", paymentStatus: "Paid", paymentMethod:"Momo"},
    {id:9, orderID:"#48996", billingName:"Sommer", date:"09 Aug, 2021", total: "356$", paymentStatus: "Checking", paymentMethod:"Visa"},
    {id:10, orderID:"#40098", billingName:"Neymar", date:"11 Nov, 2021", total: "248$", paymentStatus: "Paid", paymentMethod:"Momo"},
    {id:11, orderID:"#42414", billingName:"Lukaku", date:"30 Sep, 2021", total: "945$", paymentStatus: "Paid", paymentMethod:"Visa"},
]