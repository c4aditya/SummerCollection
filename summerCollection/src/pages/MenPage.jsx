import { addToCart } from "../Redux/Slice/Cart";
import { useDispatch } from "react-redux"
import PosterWithPoints from "../Components/PosterWithPoints";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import MenData from "../Components/Data/MenData";
import MenPorducts from "../Components/Data/MenProductData";
import { useRef } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Menpage({ value }) {
    const nevigate = useNavigate()
    const dispatch = useDispatch()
    const images = [
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_DulUBng.jpg?format=webp&w=1366&dpr=2.0",
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_XBj4N0m.jpg?format=webp&w=1366&dpr=2.0",
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_4_Hm9neKg.jpg?format=webp&w=1366&dpr=2.0"
    ]
    const points = [
        "Points1",
        "Points2",
        "Points3",

    ]

    const sliderRef = useRef(null)

    function slideLeft() {
        sliderRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }

    function slideRight() {
        sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
    return (
        <>
            <PosterWithPoints image={images} points={points} />
            <div className="heading-our-product">
                <h1>TOP 10 PIC OF THE WEEK</h1>
            </div>

            <div className="slider-container">

                <div className="slide-left">
                    <button onClick={slideLeft}><FaChevronLeft /></button>
                </div>


                <div className="main-products-div" ref={sliderRef}>
                    {
                        MenData.map((data) => (
                            <div className="products" key={data.id}>
                                <button className="btn" onClick={() => { dispatch(addToCart(data)); toast.success('Product added to cart!') }}>

                                    <div className="products-images">
                                        <img src={data.image} alt="Men Products" />
                                    </div>


                                    <div className="all-content">
                                        <div className="products-title">
                                            <p>{data.title}</p>
                                        </div>
                                        <div className="products-type">
                                            <p>{data.type}</p>
                                        </div>

                                        <div className="product-price">
                                            <div className="product-new-price">                                    <ul>
                                                <li><span><MdCurrencyRupee /></span>{data.newPrize}</li>
                                            </ul>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        ))
                    }

                </div>
                <div className="slide-right">
                    <button onClick={slideRight}><FaChevronRight /></button>
                </div>

            </div>

            <div className="products">
                {
                    MenPorducts.map((data) => (
                        <div className="" key={data.id} onClick={() => nevigate("/productDetails", { state: data })}>
                            <div className="image">
                                <img src={data.colorOptionns[0].Image} />
                            </div>


                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default Menpage;