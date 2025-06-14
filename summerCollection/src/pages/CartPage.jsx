import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeToCart } from "../Redux/Slice/Cart";
import { CiShoppingCart } from "react-icons/ci";
import { MdCurrencyRupee } from "react-icons/md";
import { NavLink } from "react-router-dom";
function Cart() {
    const dispatch = useDispatch();
    const Cart = useSelector((state) => state.Cart || []);
    const totalItems = Cart.length;
    const totalPrice = Cart.reduce((total, product) => total + parseFloat(product.price), 0);

    return (
        <>
            {
                Cart.length > 0 ? (
                    <div className="cart-section">
                        <div className="main-cart-page">
                            {
                                Cart.map((product) => (
                                    <div key={product.id} className="border" >
                                        <div className="top-cart-ss">
                                            <div className="product-image">
                                                <img src={product.image} />
                                            </div>
                                            <div className="cart-ss" >
                                                <div className="product-content">
                                                    <div className="descripction">
                                                        <p>{product.descripction}</p>
                                                    </div>
                                                    <div className="title">
                                                        <p>{product.title}</p>
                                                    </div>

                                                    <div className="price">
                                                        <ul>
                                                            <li><span><MdCurrencyRupee /></span>{product.price}</li>
                                                            <li className="li-text">MRP incl. of all taxes</li>
                                                        </ul>
                                                    </div>


                                                </div>


                                            </div>
                                        </div>
                                        <div className="button-section-button-cart">

                                            <div className="removeToCart">
                                                <button onClick={() => dispatch(removeToCart(product.id))}>Remove to cart</button>
                                            </div>

                                           

                                        </div>

                                    </div>


                                )
                                )


                            }
                        </div>

                        <div className="checkout-div">


                            <div className="child-checkout-div">


                                <div className="price-and-quantity">

                                    <div className="heading-chekout-div">
                                        <p>Billing Detials </p>
                                    </div>
                                    <div className="total-products">
                                        <ul>
                                            <li><span>Total Items</span>{totalItems}</li>
                                        </ul>
                                    </div>

                                    <div className="total-price">
                                        <ul>
                                            <li><span>Delivery</span>Free</li>
                                        </ul>

                                    </div>
                                    <div className="total-price">
                                        <ul>
                                            <li><span>Total Price</span>  {totalPrice}</li>
                                        </ul>

                                    </div>


                                </div>

                                <div className="checkout-button">
                                    <button>Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="empty-cart-show">
                            <div className="empty-cart">
                                <div className="cart-image">
                                    <CiShoppingCart />
                                </div>

                                <div className="empty-cart-text">
                                    <h1>Your Cart is Empty</h1>
                                </div>

                                <div className="shopNow">
                                    <NavLink className="underline" to="/"><p>Shop Now</p></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Cart;