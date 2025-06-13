import { useState } from "react";
import { MdCurrencyRupee } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { addToCart } from "../Redux/Slice/Cart";
import { useDispatch } from "react-redux"
import { toast } from 'react-toastify';
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
function ProductDetails(){
    const dispatch = useDispatch()
    const location = useLocation()
    const product = location.state
        const [activeColor , setColor] = useState(product.colorOptionns[0])

        function handleAddToCart(){
            const productToAdd ={
                id:product.id,
                title:product.title,
                image:activeColor.Image

            }

            dispatch(addToCart(productToAdd));
            toast.success("Product is Added in cart")
        }
    return(
        <>
      <div>  
      
       
    </div>

    <div className="main-cloth-div">

        <div className="cloth-image">
            <img src={activeColor.Image}/>
        </div>

        <div className="about-cloth">
            <div className="cloth-title">
                <p>{product.descripction}</p>
                <p className="title-cloth">{product.title}</p>
            </div>
            <hr></hr>

            <div className="product-price">
                <p><span><MdCurrencyRupee/></span>{product.newPrice}</p>
            </div>
    
           <div className="dispatch">
            <p> * Dispatch in 5 - 7 days</p>
           </div>
           
           <div className="size">
            <p>Please Select Size</p>
            <ul>
                <li>XS</li>
                <li>S</li>
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>XLL</li>
                <li>2XL</li>
            </ul>
           </div>

           <div className="colors">
             <p>Please select the color </p>
            <div className="product-images">
                
             {product.colorOptionns.map((option, index) => (
            
                    <button key={index} onClick={()=>setColor(option)} >
            <img src={option.Image}  alt="Color Options "/>
          </button>
          
          
        ))}
      </div>         

           </div>

           <div className="buttons">
            <div className="addToCart">
                <button onClick={handleAddToCart}>Add To Cart</button>
            </div>

            <div className="wishlist">
                <button>Wishlist</button>
            </div>
           </div>

           <div className="social-media">
            <div className="heading-social">
             <p> Contact us</p>  
            </div>

            <div className="social-media-links-main">
                          
                            <ul>
                                <li>
                                   <CiFacebook/>
                                </li>
                                <li>
                                   <FaWhatsapp/>
                                </li>
                                <li>
                                    <CiInstagram />
                                </li>

                                <li>
                                    <CiTwitter/>
                                </li>
                            </ul>
                        </div>

           </div>

           <div className="ship">         

           <div className="shiping">
            <div className="text">
               <p>Shiping</p>
            </div>

            <div className="mark">
                +
            </div>
           </div>

             <hr></hr>

            <div className="shiping">
            <div className="text">
               <p>Additional Info</p>
            </div>

            <div className="mark">
                +
            </div>
           </div>

           <hr></hr>

            <div className="shiping">
            <div className="text">
               <p>Descripction</p>
            </div>

            <div className="mark">
                +
            </div>
           </div>

           </div>

        </div>

    </div>
    </>
    )
}

export default ProductDetails;