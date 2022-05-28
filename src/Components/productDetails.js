import shoes from "../shoes.json"
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { slug } = useParams();
    const shoe = shoes[slug];
    if (!shoe) {
        return <h3>Not found! 404</h3>
    }
    const { name, img, img2, price } = shoe;

    return <>
        <div className="row">
            <div className="col-md-6">
                <div
                    id="carouselExampleDark"
                    className="carousel carousel-dark slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide-to={0}
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide-to={1}
                            aria-label="Slide 2"
                        />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval={10000}>
                            <img src={img} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval={2000}>
                            <img src={img2} className="d-block w-100" alt="..." />                            
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
                <h4>{name}</h4>
                <h6>Price: ${price}</h6>
            </div>
        </div>


    </>
}

export default ProductDetails;