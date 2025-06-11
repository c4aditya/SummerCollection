import { RxHamburgerMenu } from "react-icons/rx";
import { GoPerson } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";

function NavBar() {
    const [menu, setMenu] = useState(false)
    function handleMenu() {
        console.log("The Button is clicked")
        setMenu(!menu)
    }

    function handleClose() {
        setMenu(!menu)
    }
    if (menu) {
        document.body.style.backgroundColor = "#999999"
    }
    else {
        document.body.style.backgroundColor = "white"
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

                                <li>Men</li>
                                <li>Women</li>
                                <li>Juinor</li>
                            </ul>
                        </div>


                    </div>
                    <div className="logo">
                        <p>Summer Collections</p>
                    </div>

                    <div className="right-nav-bar">

                        <ul>
                            <li><GoPerson /> </li>
                            <li><CiHeart /></li>
                            <li><CiShoppingCart /> </li>
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
                                    <div className="logo">
                                        <h1>logo</h1>
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