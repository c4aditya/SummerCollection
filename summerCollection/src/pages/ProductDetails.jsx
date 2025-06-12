import { useState } from "react";
import { useLocation } from "react-router-dom";
import { addToCart } from "../Redux/Slice/Cart";
import { useDispatch } from "react-redux"
import { toast } from 'react-toastify';
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
         <div>
      <h1>{product.title}</h1>

      <img src={activeColor.Image}/>

      <div className="product-images">
        {product.colorOptionns.map((option, index) => (
          <button key={index} onClick={()=>setColor(option)} >
            {option.color}
          </button>
        ))}
      </div>
       <button onClick={handleAddToCart}>Add To Cart</button>
    </div>
    )
}

export default ProductDetails;