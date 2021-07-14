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
        id:"id_review",
        name: 'id_review',
        defaultWidth: 100, 
        headerProps: { style: headerStyle },
        header: '#ID' ,
    },
    { 
        id:"department",
        name: 'department',
        defaultFlex:1, 
        minWidth: 300,
        headerProps: { style: headerStyle }, 
        header: 'Deparment' ,
    
    },
    {
        id:"reviewer",
        name: 'reviewer',
        header: 'Reviewer',
        headerProps: { style: headerStyle },
        defaultWidth: 250,
        
    },
    { 
        id: 'rating',
        name:"rating", 
        header: 'Rating',
        headerProps: { style: headerStyle }, 
        defaultWidth: 150, 
        
    },
    {
        id:"date",
        name: 'date',
        header: 'Date',
        headerProps: { style: headerStyle },
        defaultWidth: 150,
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
    {id:0, id_review:"0901", reviewer: "Marvin McKinney", department:"Support Customer", rating: 3, date:"03.01.2020"},
    {id:1, id_review:"3421", reviewer: "Johny Kevin", department:"Design Quality", rating: 5,  date:"13.09.2020"},
    {id:2, id_review:"3466", reviewer: "Barck Obama", department:"Support Customer", rating: 4, status: "received", date:"03.12.2020"},
    {id:3, id_review:"7455", reviewer: "Donal Trump", department:"Design Quality", rating: 2, date:"15.01.2020"},
    {id:4, id_review:"6454", reviewer: "Bill Cliton", department:"Research and Development", rating: 5,  date:"29.09.2020"},
    {id:5, id_review:"2343", reviewer: "Abraham Lincoln", department:"Quanlity Control", rating: 4, date:"17.01.2020"},
    {id:6, id_review:"1243", reviewer: "John Steley", department:"Research and Development", rating: 5, date:"09.11.2020"},
    {id:7, id_review:"9765", reviewer: "Alexander Bitch", department:"Support Customer", rating: 2,  date:"06.06.2020"},
    {id:8, id_review:"6454", reviewer: "Double and Gabana", department:"Quanlity Control", rating: 3, date:"03.01.2020"},
    {id:9, id_review:"2344", reviewer: "Sun house", department:"For Design Quality", rating: 4, date:"03.08.2020"},
    {id:10, id_review:"5454", reviewer: "Vin Diesel", department:"Support Customer", rating: 1, date:"23.12.2020"},
    {id:11, id_review:"6678", reviewer: "Jocker", department:"Research and Development", rating: 5,  date:"19.11.2020"},
    {id:12, id_review:"3235", reviewer: "Harry Queen", department:"Quanlity Control", rating: 5, date:"28.10.2020"},
    {id:13, id_review:"0903", reviewer: "Hulk", department:"Quanlity Control", rating: 3, date:"21.01.2020"},
    {id:14, id_review:"3490", reviewer: "Captain America", department:"Support Customer", rating: 4, date:"09.01.2020"},
    {id:15, id_review:"0808", reviewer: "Spider Man", department:"Research and Development", rating: 4, date:"17.01.2020"},

    
]