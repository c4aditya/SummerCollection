import { RxHamburgerMenu } from "react-icons/rx";
import { GoPerson } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import logo from "../images/logo.png"
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
    const cart = useSelector((state) => state.Cart);
    const wishlist = useSelector((state) => state.Wishlist);
    const [menu, setMenu] = useState(false)
    function handleMenu() {
        console.log("The Button is clicked")
        setMenu(!menu)
    }

    function handleClose() {
        setMenu(!menu)
    }

    return (
        <>
            <section className="nav-section">

                <div className="nav-bar ">
                    <div className="letf-nav-bar">
                        <div className="hamburger">
                            <ul>
                                <li onClick={handleMenu}><RxHamburgerMenu /></li>
                            </ul>
                        </div>
                        <div className="catogries">
                            <ul>

                                <NavLink to="/"><li>Men</li></NavLink>
                                <NavLink to="/women"><li>Women</li></NavLink>
                            </ul>
                        </div>


                    </div>
                    <div className="main-logo">
                        <div className="logo">
                            <img src={logo} alt="logo-image" />
                        </div>
                    </div>


                    <div className="right-nav-bar">

                        <ul>
                            <li><GoPerson /> </li>
                            <NavLink className="" to="/wishlist"> <li className="heart"><CiHeart />{
                                wishlist.length > 0 ? (<p className="wishlist-mark">{wishlist.length}</p>) : (null)
                            } </li> </NavLink>
                            <NavLink className="underline text" to="/cart"> <li><CiShoppingCart />{
                                cart.length > 0 ? (<p className="cart-mark">{cart.length}</p>) : (null)
                            } </li> </NavLink>
                        </ul>

                    </div>

                </div>



            </section>

            <aside>
                <div className={`sideMenubar ${menu ? "open" : " "}`}>

                    {
                        menu ? (<div>
                            <div className="side-bar-nav-bar">
                                <div className="cross ">
                                    <button onClick={handleClose}><IoMdClose /></button>
                                </div>
                                <div className="top-div-class-logo-and-buttons">
                                    <div className="logo inside-logo">
                                        <img src={logo} alt="logo-image" />
                                    </div>

                                    <div className="top-side-bar-buttom">
                                        <ul>
                                            <li><span><GoPerson /> </span> <button className="btn">Login / Register</button>  </li>
                                        </ul>

                                    </div>
                                </div>

                                <div className="productLists">
                                    <table>
                                        <tr>
                                            <th>Tranding</th>
                                        </tr>

                                        <tr>
                                            <td>Bestseller <span><RiArrowDropDownLine /></span></td>
                                            <td>New Releases <span><RiArrowDropDownLine /></span></td>
                                        </tr>
                                    </table>
                                </div>

                                <div className="productLists">
                                    <table>
                                        <tr>
                                            <th>Categories</th>
                                        </tr>

                                        <tr>
                                            <td>Men <span><RiArrowDropDownLine /></span></td>
                                            <td>Women <span><RiArrowDropDownLine /></span></td>
                                            <td>Kids <span><RiArrowDropDownLine /></span></td>
                                        </tr>
                                    </table>
                                </div>

                                <div className="productLists">
                                    <table>
                                        <tr>
                                            <th>Help & Setting</th>
                                        </tr>

                                        <tr>
                                            <td>Your Account <span><RiArrowDropDownLine /></span></td>
                                            <td>Customer Service  <span><RiArrowDropDownLine /></span></td>
                                            <td>Sign in<span><RiArrowDropDownLine /></span></td>
                                        </tr>
                                    </table>
                                </div>



                            </div>

                        </div>) : (<p> </p>)
                    }

                </div>
            </aside>
        </>
    )
}

export default NavBar;