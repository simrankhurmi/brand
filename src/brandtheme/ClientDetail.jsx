import React from 'react'
import {n1, n2} from  '../brandtheme/images'

const ClientDetail = () => {
  return (
   <>
    <section className="clientdetails" id='blog'>
            <section className="clientdetails_heading">
                <h5>OUR CLIENTS</h5>
            </section>
            <section className="clientdetails_subheading">
                <h1> Brands That Work With Us</h1>
            </section>
            <section className="clientdetails_content">
                <section className="clientdetails_content--container">
                    <ul>
                        <li><a href="">
                                <img src={n1} alt=""/>
                            </a></li>
                        <li><a href="">
                                <img src={n2} alt=""/>
                            </a></li>
                        <li><a href="">
                                <img src={n1} alt=""/>
                            </a></li>
                        <li><a href="">
                                <img src={n2} alt=""/>
                            </a></li>
                        <li><a href="">
                                <img src={n1} alt=""/>
                            </a></li>
                    </ul>
                </section>
            </section>
        </section>
   </>
  )
}

export default ClientDetail