import React from "react";
import ReactDOM from "react-dom/client";

const Heading = () => {
    return(
      <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://cdn.dribbble.com/userupload/10790076/file/original-ff791b20101e6551b2ade568108f5dba.png?resize=400x300"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
      </div>
    );
};

const ResCards = (props) => {
    const{restData}=props
    return(
        <div className="res-cards">
            <img className="res-logo" src={restData.img}/>
            <h3>{restData.name}</h3>
            <span>{restData.cusine}</span>
            <div className="btom">
            <h4 className="box"><i className="ri-star-fill"></i>{restData.rating}</h4>
            <ul>
                <li>{restData.time}</li>
                <li> {restData.num} FOR TWO </li>
            </ul>
            </div>
        </div>
    );
};
const dataObj =[{
    name:"KFC",
    cusine:"Fried chicken,Burgers,Popcorn",
    time:"45 MINS",
    rating:"4.4",
    num:"500",
    id:"20",
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4"
},{
    name:"Pizza Hut",
    cusine:"Pizzas Basavagadi",
    time:"30 MINS",
    rating:"3.9",
    num:"350",
    id:"21",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvG8twny4d0BGO4OuarvZlH_FJ4nmlCSveXQ&usqp=CAU"
},{
    name:"Leon's - Burgers & Wings (Leon Grill)",
    cusine:"American, Snacks Banashankari",
    time:"45 MINS",
    rating:"4.5",
    num:"600",
    id:"22",
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b2edbc28b7b8219d6e0a9c049ce06658"
},{
    name:"Burger King",
    cusine:"Burgers,American Basavanagadi",
    time:"28 MINS",
    rating:"4.2",
    num:"150",
    id:"23",
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"
},{
    name:"Meghana Foods",
    cusine:"Biryani, Andhra Jayanagar",
    time:"15 MINS",
    rating:"4.5",
    num:"400",
    id:"24",
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x4uyxvihmg8qa3pddkgf"
},{
    name:"Kwality Walls Frozen Dessert And Ice Cream",
    cusine:"Desserts, Ice Cream Seshadripuram",
    time:"50 MINS",
    rating:"4.4",
    num:"200",
    id:"25",
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/7e526a0c0ed3cd56eefac3d318c78977"
},{
    name:"Baskin Robbins - Ice Cream Desserts",
    cusine:"Desserts, Ice Cream Jayanagar",
    time:"26 MINS",
    rating:"4.6",
    num:"250",
    id:"26",
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/85ccae4e3576f9330af102c46ca85395"
}];

const Bodycom = () => {
    return(
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                {
                    dataObj.map((res)=><ResCards key={res.id} restData={res}/>)
                }
            </div>
        </div>
    );
};

const Applayout = () => {
    return (
       <div className="app">
        <Heading /> 
        <Bodycom />  
       </div>
    );
};

const root=ReactDOM.createRoot(document.getElementById("hell"));
root.render(<Applayout />);