import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

export const listCategories = [
    {
        label:"All categories",
        value:"all_categories"
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
        label:"Juice",
        value:"juice"
    }

]
export const listStatus = [
    {
        label:"All",
        value:"all"
    },
    {
        label:"Active",
        value:"active"
    },
    {
        label:"Disable",
        value:"disable"
    }, 
]
export const listShow = [
    {
        label:"Show 15 ",
        value:"15"
    },
    {
        label:"Show 20 ",
        value:"20"
    },
    {
        label:"Show 30 ",
        value:"30"
    },
]
const headerStyle = {
    background:"#f8f9fa",
    color:"#383e50",
    padding:"0.25rem 0"

}
const buttonGreenStyle = {
    color:"white", 
    borderRadius:"5px", 
    marginRight:"10px",
    background:"#088178",
    textAlign:"center",
    padding:"0.25rem 0.75rem",
    textAlign:"center" ,
    border:"none"
}
const buttonWhiteStyle = {
    color:"black", 
    borderRadius:"5px", 
    background:"white",
    textAlign:"center",
    padding:"0.25rem 0.75rem",
    textAlign:"center" ,
    border:"none"
}

export const columns = [
    { 
        id:"orderID",
        name: 'orderID',
        defaultWidth: 100, 
        headerProps: { style: headerStyle },
        header: '#ID' ,
    },
    { 
        id:"name",
        name: 'name', 
        defaultWidth: 250,
        headerProps: { style: headerStyle }, 
        header: 'Name' ,
    
    },
    {
        id:"email",
        name: 'email',
        header: 'Email',
        headerProps: { style: headerStyle },
        defaultWidth: 255,
        
    },
    { 
        id: 'total',
        name:"total", 
        header: 'Total',
        headerProps: { style: headerStyle }, 
        defaultWidth: 150, 
        
    },
    {
        id:"status",
        name: 'status',
        header: 'Status',
        headerProps: { style: headerStyle },
        defaultWidth: 150,
    },
    { 
        id: 'date',
        name:"date", 
        header: 'Date',
        headerProps: { style: headerStyle }, 
        defaultWidth: 180, 
        
    },
    {
        id:"action",
        name: 'action',
        header: 'Actions',
        headerProps: { style: headerStyle },
        defaultWidth: 200,
        render: ({ value }) => (
            <span style={{display:"flex"}}>
                <button style={buttonGreenStyle}>
                    View Detail
                </button>
                <button style={buttonWhiteStyle}>
                    <span><DeleteOutlineIcon /></span>
                    Delete
                </button>
            </span>
        )
    },
]

  
export const dataSource = [
    {id:0, orderID:"0901", name: "Marvin McKinney", email:"marvin@gmail.com", total: "$90", status: "pending", date:"03.01.2020"},
    {id:1, orderID:"3421", name: "Johny Kevin", email:"johnkevin@gmail.com", total: "$920", status: "cancel", date:"13.09.2020"},
    {id:2, orderID:"3466", name: "Barck Obama", email:"obama@gmail.com", total: "$190", status: "received", date:"03.12.2020"},
    {id:3, orderID:"7455", name: "Donal Trump", email:"donaltrump@gmail.com", total: "$930", status: "pending", date:"15.01.2020"},
    {id:4, orderID:"6454", name: "Bill Cliton", email:"billclinton@gmail.com", total: "$790", status: "cancel", date:"29.09.2020"},
    {id:5, orderID:"2343", name: "Abraham Lincoln", email:"linlcon@gmail.com", total: "$670", status: "pending", date:"17.01.2020"},
    {id:6, orderID:"1243", name: "John Steley", email:"johnsteley@gmail.com", total: "$800", status: "received", date:"09.11.2020"},
    {id:7, orderID:"9765", name: "Alexander Bitch", email:"alexanderbitch@gmail.com", total: "$902", status: "cancel", date:"06.06.2020"},
    {id:8, orderID:"6454", name: "Double and Gabana", email:"doublegabana@gmail.com", total: "$906", status: "pending", date:"03.01.2020"},
    {id:9, orderID:"2344", name: "Sun house", email:"sunhouse@gmail.com", total: "$690", status: "received", date:"03.08.2020"},
    {id:10, orderID:"5454", name: "Vin Diesel", email:"vindiesel@gmail.com", total: "$390", status: "pending", date:"23.12.2020"},
    {id:11, orderID:"6678", name: "Jocker", email:"jocker@gmail.com", total: "$880", status: "cancel", date:"19.11.2020"},
    {id:12, orderID:"3235", name: "Harry Queen", email:"harryqueen@gmail.com", total: "$660", status: "received", date:"28.10.2020"},
    {id:13, orderID:"0903", name: "Hulk", email:"hulk@gmail.com", total: "$902", status: "pending", date:"21.01.2020"},
    {id:14, orderID:"3490", name: "Captain America", email:"captainamerica@gmail.com", total: "$905", status: "received", date:"09.01.2020"},
    {id:15, orderID:"0808", name: "Spider Man", email:"spiderman@gmail.com", total: "$756", status: "pending", date:"17.01.2020"},

    
]