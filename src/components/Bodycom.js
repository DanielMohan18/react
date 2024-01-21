import ResCards from "./ResCards";
import dataObj from "../utils/data"
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

export default Bodycom;