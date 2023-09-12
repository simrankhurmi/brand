import React from 'react'

const ClientDetail = () => {
  return (
   <>
    <section className="clientdetails">
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
                                <img src="../images/n1.png" alt=""/>
                            </a></li>
                        <li><a href="">
                                <img src="../images/n2.png" alt=""/>
                            </a></li>
                        <li><a href="">
                                <img src="../images/n1.png" alt=""/>
                            </a></li>
                        <li><a href="">
                                <img src="../images/n2.png" alt=""/>
                            </a></li>
                        <li><a href="">
                                <img src="../images/n1.png" alt=""/>
                            </a></li>
                    </ul>
                </section>
            </section>
        </section>
   </>
  )
}

export default ClientDetail