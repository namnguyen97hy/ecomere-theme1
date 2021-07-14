import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import ImagePrd1 from "../../assets/images/backend_prd1.jpg";
import ImagePrd2 from "../../assets/images/backend_prd2.jpg";
import ImagePrd3 from "../../assets/images/backend_prd3.jpg";
import ImagePrd4 from "../../assets/images/backend_prd4.jpg";
import ImagePrd5 from "../../assets/images/backend_prd5.jpg";
import ImagePrd6 from "../../assets/images/backend_prd6.jpg";


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
        id:"product_name",
        name: 'product_name',
        defaultWidth: 400, 
        headerProps: { style: headerStyle },
        header: 'Product Name' ,
        // style: {color:"#088f78", fontWeight:"600"}
        // render: ({value}) => {
        //     return <span>{value}</span>
        // }
    },
    { 
        id:"price",
        name: 'price', 
        defaultFlex: 80,
        headerProps: { style: headerStyle }, 
        header: 'Price' ,
        // render: ({value}) => {
        //     return <span>{value}</span>
        // }
    },
    {
        id:"status",
        name: 'status',
        header: 'Status',
        headerProps: { style: headerStyle },
        defaultWidth: 200,
        // render: ({ value }) => {
        //     return <p onClick={() => console.log(value)}>{value}</p>
        // }
    },
    { 
        id: 'date',
        name:"date", 
        header: 'Date',
        headerProps: { style: headerStyle }, 
        minWidth: 200, 
        defaultFlex: 1, 
        // render: ({value}) => {
        //     return <span>{value}</span>
        // }
    },
    {
        id:"action",
        name: 'action',
        header: 'Action',
        headerProps: { style: headerStyle },
        defaultWidth: 200,
        render: ({ value }) => (
            <span style={{display:"flex"}}>
                <button style={buttonGreenStyle}>
                    <span><EditIcon /></span>
                    Edit
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
    {id:0, image: ImagePrd1, name: "T-shirt for men medium size" , price: "$40.5" , status: "active", date: "02-01-2021" },
    {id:1, image: ImagePrd2, name: "Hoodle down jacket" , price: "$13" , status: "archived", date: "23-04-2021" },
    {id:2, image: ImagePrd3, name: "Dress for women" , price: "$78" , status: "active", date: "13-09-2021" },
    {id:3, image: ImagePrd4, name: "Jean short for mens" , price: "$20.5" , status: "disable", date: "08-09-2021" },
    {id:4, image: ImagePrd5, name: "Collections autumns" , price: "$32" , status: "active", date: "11-01-2021" },
    {id:5, image: ImagePrd6, name: "T-shirt for men large size" , price: "$28.6" , status: "archived", date: "30-07-2021" },
    {id:6, image: ImagePrd1, name: "Clothes winter" , price: "$45.5" , status: "active", date: "21-02-2021" },
    {id:7, image: ImagePrd2, name: "Poodle t-short " , price: "$12.5" , status: "disable", date: "02-11-2021" },
    {id:8, image: ImagePrd5, name: "Dress new model" , price: "$33.5" , status: "active", date: "09-04-2021" },
    {id:9, image: ImagePrd4, name: "T-shirt for men small size" , price: "$40.2" , status: "archived", date: "29-08-2021" },
    
]