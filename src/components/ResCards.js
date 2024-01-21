
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

export default ResCards;