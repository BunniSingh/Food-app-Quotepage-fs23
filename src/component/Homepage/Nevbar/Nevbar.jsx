import React from 'react'
import style from './Nevbar.module.css'
import { RxHamburgerMenu } from "react-icons/rx";

export const Nevbar = () => {
  return (
    <nav className={style.navbar}>
        <div className={style.logo}>
            <img src="https://flowbite.com/docs/images/logo.svg" alt="logo" />
            <span className={style.title}>GeekFoods</span>
        </div>

        <ul className={style.menu}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Quote</a></li>
            <li><a href="#">Resturants</a></li>
            <li><a href="#">Foods</a></li>
            <li><a href="#">Contact</a></li>
        </ul>

        <div className={style.user}>
            <div className={style.btn}>
                <a href="#">Get started</a>
            </div>
            <RxHamburgerMenu className={style.hamburger}/>

        </div>
    </nav>
  )
}
