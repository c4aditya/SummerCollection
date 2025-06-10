import { RxHamburgerMenu } from "react-icons/rx";
import { GoPerson } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useState } from "react";

function NavBar(){
    const [menu , setMenu] = useState(false)
    function handleMenu(){
        console.log("The Button is clicked")
        setMenu(!menu)
    }
    return(
        <>
            <section className="nav-section">
                   
                    <div className="nav-bar ">
                        <div className="letf-nav-bar">

                        <ul>
                            <li onClick={handleMenu}><RxHamburgerMenu/></li>
                            <li>Men</li>
                            <li>Women</li>
                            <li>Juinor</li>
                        </ul>

                        </div>
                        <div className="logo">
                            <p>Summer Collections</p>
                        </div>

                        <div className="right-nav-bar">

                         <ul>
                            <li><GoPerson/></li>
                            <li><CiHeart/></li>
                            <li><CiShoppingCart/></li>
                         </ul>

                        </div>

                    </div>


               
            </section>

            <aside>
                <div className="sideMenubar">
                    {
                       menu ?(<div> <h1>Meanus is clicked</h1></div>) :(<p> </p>)
                    }
                </div>
            </aside>
        </>
    )
}

export default NavBar;