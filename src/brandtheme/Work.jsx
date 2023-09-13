import React from 'react'
import {i,ii,iii,iv,v,vi} from './images'

const Work = () => {
  return (
    <>
    <section className="work"  id='work'>
            <section className="work_heading">
                <h3>OUR WORK</h3>
            </section>
            <section className="work_subheading">
                <h1>OUR PORTFOLIO</h1>
            </section>
            <section className="work_content">
                <section>
                    <img src={i}alt=""/>
                </section>

                <section>
                    <img src={ii} alt=""/>
                </section>

                <section>
                    <img src={iii} alt=""/>
                </section>

                <section>
                    <img src={iv} alt=""/>
                </section>

                <section>
                    <img src={v} alt=""/>
                </section>

                <section>
                    <img src={vi} alt=""/>
                </section>
            </section>

        </section>
    </>
  )
}

export default Work