import React from 'react'
import {logo} from './images'


const Header = () => {
  return (
    <>
            <section className="header">
                <section className="header_logo">
                    <img src={logo} alt="logo"/>
                </section>
                <section className="header_menu">
                    <ul>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="#client1">Clients</a></li>
                        <li><a href="">F.A.Q</a></li>
                        <li><a href="">Portfolio</a></li>
                        <li><a href="">Contacts</a></li>
                        <li><a href="">Home</a></li>
                    </ul>
                </section>
                <section className="header_btn--left">
                    <button>GET IN TOUCH</button>
                </section>
            </section>
    </>
  )
}

export default Header