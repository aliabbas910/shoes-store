import shoes from "../shoes.json";
import Product from "./product";

const ProductMapping = () => {
    const arr = Object.entries(shoes);

    return <>
    {
            arr.map((item)=>{
                    return <Product item={item} key={item[0]}/>
            })
        }
    </>
}

export default ProductMapping;