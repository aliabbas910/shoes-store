import Product from "./product";
import shoes from "../shoes.json";
import { Link, Outlet } from "react-router-dom";


const Launch = () => {
    let arr = Object.entries(shoes);

    return <>
        <h3>Welcome to Launch Products!</h3>
        <div className="row">
        
        <Outlet/>
        </div>
    </>
}

export default Launch;