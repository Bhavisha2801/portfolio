import React from 'react'
import './Home.css'
import logo from '../Image/logo.jpg'
import bimg from '../Image/back_img.png'
import { HashLink as Link } from "react-router-hash-link"
function Home(){

  window.addEventListener("scroll",function(){
    const header = this.document.querySelector("header");
    header.classList.toggle("active" , window.scrollY > 0)
  })

    return (
      <div className='home' id='home'>


          <div className='header d__flex align__items__center pxy__30'>
              <Link to="#home">
              <div className='logo'>
                  <img className='logo_size' src={logo} alt="" />
              </div>
              </Link>

              <div className='navigation'>
                  <ul className="navbar d__flex">
                    <Link to="#home" smooth><li className='nav__items nav_fonts'>Home</li></Link>
                    <Link to="#about" smooth><li className='nav__items nav_fonts'>About</li></Link>
                    <Link to="#skills" smooth><li className='nav__items nav_fonts'>Skills</li></Link>
                    <Link to="#projects" smooth><li className='nav__items nav_fonts'>Projects</li></Link>
                    <Link to="#contact" smooth><li className='nav__items nav_fonts'>Contact</li></Link>
                  </ul>
              </div>
          </div>


        <div className="home__bg">
            <div className='container'>
                  <div className="home__meta">
                      <h1 className="home__text pz__10">
                        Welcome to My portfolio
                      </h1>
                      <h2 className="home__text pz__10">
                          Hii, I'm Bhavisha Nayi
                      </h2>
                      <h3 className="home__text sweet pz__10" id="colored">
                        Full Stack Web Developer
                      </h3>
                      <h4 className="home__text pz__10">
                        based in India
                      </h4>
                  </div>
            </div>
            <div className='back-img'>
              <img src={bimg} alt="" />
            </div>
        </div>
      </div>
    )
}

export default Home




