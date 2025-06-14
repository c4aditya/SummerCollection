import { useSelector } from "react-redux";
import { MdCurrencyRupee } from "react-icons/md";
import { addToCart } from "../Redux/Slice/Cart";
import { useDispatch } from "react-redux";
import { CiHeart } from "react-icons/ci";
import { removeFromWishList } from "../Redux/Slice/WishList";
import { NavLink } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";


function WishListPage() {
  const wishlist = useSelector((state) => state.Wishlist);
  const dispatch = useDispatch() 
      function handleAddToCart(item){
              const productToAdd ={
                  id:item.id,
                  title:item.title,
                  descripction:item.descripction,
                  price:item.price,
                  image:item.image,              
  
              }           
  
              dispatch(addToCart(productToAdd));
              // toast.success("Product is Added in cart")
          }
      

  return (
    <>
      <div className="wishlist-container">
       

        {wishlist.length == 0 ? (
              <div>     
                 
                        <div className="empty-cart-show">
                            <div className="empty-cart">
                                <div className="cart-image">
                                    <CiHeart/>
                                </div>

                                <div className="empty-cart-text">
                                    <h1>Your Wishlist is Empty</h1>
                                </div>

                                <div className="shopNow">
                                    <NavLink className="underline" to="/"><p>Shop Now</p></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
          
        ) : (
           <div>
             <div className="path">

                <ul>
                  <NavLink to="/">  <li>Home</li></NavLink> 
                    <li><FaAngleRight/></li>
                     <li>Product Details</li> 
                       <li><FaAngleRight/></li>
                      <li>Wishlist</li>
                </ul>
                
             </div>
           
          <div className="wishlist-items">
            
            {wishlist.map((item) => (
              <div key={item.id} className="wishlist-item-card">
                <img src={item.image} alt={item.title} width="150" />
                <h3>{item.title}</h3>
                <p>{item.descripction}</p>
                <p>
                  <MdCurrencyRupee />
                  {item.price}
                </p>
            <hr className="hr-wish"></hr>
            <div className="buttons buttons-on-wishlist">
            <div className="addToCart addToCart-buttons-on-wishlist ">
                <button onClick={() => handleAddToCart(item)}>Add To Cart</button>
            </div>

            <div className="wishlist addToCart-buttons-on-wishlist ">
                <button onClick={() => dispatch(removeFromWishList(item.id))}>Remove </button>
            </div>

            
           </div>
              </div>
            ))}
          </div>
           </div> 
        )}
      </div>
    </>
  );
}

export default WishListPage;
