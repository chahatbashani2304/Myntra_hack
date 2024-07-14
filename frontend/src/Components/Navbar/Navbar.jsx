import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const [menu, setMenu] = useState("Shop");
    const { getTotalCartItems } = useContext(ShopContext);

    const handleRedeemClick = () => {
        setMenu("Redeem");
        window.location.href = 'https://ananyataneja.github.io/myntra/'; 
    };

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <Link to={"/"}><img src={logo} alt="" /></Link>
                <Link to={"/"}><p>Myntra</p></Link>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => { setMenu("Shop") }}>
                    <Link style={{ textDecoration: "none" }} to='/'>Shop</Link>
                    {menu === "Shop" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("Men") }}>
                    <Link style={{ textDecoration: "none" }} to='/mens'>Men</Link>
                    {menu === "Men" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("Women") }}>
                    <Link style={{ textDecoration: "none" }} to='/womens'>Women</Link>
                    {menu === "Women" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("Kids") }}>
                    <Link style={{ textDecoration: "none" }} to='/kids'>Kids</Link>
                    {menu === "Kids" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("Recycle") }}>
                    <Link style={{ textDecoration: "none" }} to='/recycle'>Recycle</Link>
                    {menu === "Recycle" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("Community") }}>
                    Community
                    {menu === "Community" ? <hr /> : <></>}
                </li>
                <li onClick={handleRedeemClick}>
                    Share to Redeem
                    {menu === "Redeem" ? <hr /> : <></>}
                </li>
                <li onClick={() => setMenu("sustainable")}>
                    <Link style={{ textDecoration: "none" }} to='/sustainable'>Sustainable Fashion</Link>
                    {menu === "sustainable" ? <hr /> : null}
                </li>
            </ul>
            <div className='nav-login-cart'>
                <Link to="/login"><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
}

export default Navbar;
