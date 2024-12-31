import { NavLink } from "react-router";
import { FaBars } from "react-icons/fa";
import style from "./Header.module.css";

import {useState} from "react";

export default function Header() {

    const [isToggle, setToggle] = useState(true);

    function toggleHandler(){
        setToggle(prev => !prev);
    }

    return (
        <>
            <header className={style.header}>
                <nav className={style.navbar}>
                    <NavLink to="/" className={style.navLogo}>
                        <img src="" alt="" />
                        <span className="text-2xl font-bold">Budget Bay</span>
                    </NavLink>
                    <div className={style.navButton}>
                        <NavLink className={({ isActive }) => `hidden md:block ${isActive ? style.isActive : ''}`} to="/cart">Cart</NavLink>
                        <NavLink className={({ isActive }) => `hidden md:block ${isActive ? style.isActive : ''}`} to="/login">Login</NavLink>
                        <button onClick={toggleHandler}>
                            <FaBars className="text-black text-2xl md:hidden" />
                        </button>
                    </div>
                
                    <div className={`${isToggle ? "hidden" : "" } ${style.navLinks}`}>
                        <ul className={`${style.navContainer} `}>
                            <li className="">
                                <NavLink className={({ isActive }) => isActive ? `${style.isActive} ${style.links}` : `${style.links}`} to="/">
                                    Home 
                                </NavLink>
                            </li>
                            <li>
                                <NavLink  className={({ isActive }) => isActive ? `${style.isActive} ${style.links}` : `${style.links}`} to="/menu"> Menu </NavLink>
                            </li>
                            <li>
                                <NavLink  className={({ isActive }) => isActive ? `${style.isActive} ${style.links}` : `${style.links}`} to="/contact">Contact us</NavLink>
                            </li>
                            <li className="md:hidden">
                                <NavLink  className={({ isActive }) => isActive ? `${style.isActive} ${style.links}` : `${style.links}`} to="/cart">Cart</NavLink>
                            </li>
                            <li className="md:hidden">
                                <NavLink  className={({ isActive }) => isActive ? `${style.isActive} ${style.links}` : `${style.links}`} to="/login">Login</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}
