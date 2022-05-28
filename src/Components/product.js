import { Link, useParams } from "react-router-dom";

const Product = ({ item }) => {
    const { slug } = useParams();

    return <>
        <div className="col-md-3 mb-3">
            <div className="card" style={{ width: "20rem" }}>
                <Link to={`/Launch/${item[0]}`} className="nav-link text-dark">
                    <img src={item[1].img} className="card-img-top" alt={item[1].name} />
                    <div className="card-body">
                        <h5 className="card-title">{item[1].name}</h5>
                    </div>
                </Link>
            </div>
        </div>
    </>
}

export default Product;