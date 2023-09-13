import React from 'react'

const Service = () => {
  return (
   <>
   <section className="services" id='Services'>
            <section className="services_heading--1">
                <h2>OUR SERVICES</h2>
            </section>
            <section className="services_heading--2">
                <strong>Our Specialities</strong>
            </section>
            <section className="services_maincontent">
                <section className="services_maincontent_container">
                    <section className="services_maincontent_container--icon1">
                        <span className="fas fa-edit"></span>
                        <h5>EDUCATION</h5>
                    </section>
                    <section className="services_maincontent_container--icon2">
                        <span className="fas fa-file-image"></span>
                        <h5>TOURISM</h5>
                    </section>
                    <section className="services_maincontent_container--icon3">
                        <span className="fas fa-gift"></span>
                        <h5>PRODUCTS</h5>
                    </section>
                    <section className="services_maincontent_container--icon4">
                        <span className="fas fa-handshake"></span>
                        <h5>E-COMMERCE</h5>
                    </section>
                    <section className="services_maincontent_container--icon5">
                        <span className="fas fa-hand-holding-heart"></span>
                        <h5>NEW STARTUPS</h5>
                    </section>
                </section>
            </section>
        </section>
   </>
  )
}

export default Service