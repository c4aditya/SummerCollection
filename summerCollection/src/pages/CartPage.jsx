import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeToCart } from "../Redux/Slice/Cart";
function Cart(){
    const dispatch = useDispatch();
        const Cart = useSelector((state) => state.Cart || []);

    return(
        <>
         {
            Cart.length > 0 ?(
                <div>
                    {
                        Cart.map((product ,index)=>(
                            <div key={index} >
                                <div className="product-image">
                                    <img src={product.image}/>
                                </div>
                                <div className="removeToCart">
                                     <button onClick={()=>dispatch(removeToCart(product.id))}>Remove to cart</button>
                                    </div>
                            </div>

                            
                        ))
                    }
                </div>
            ) :(
                <div>
                    <h1>Cart is empty</h1>
                </div>
            )
         }
        </>
    )
}

export default Cart;