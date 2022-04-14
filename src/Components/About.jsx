import React from 'react'
import './About.css'
import aboutImg from '../Image/back_img.png'
import jsPDF from 'jspdf'
import resume from '../Image/resume.pdf'

function About(){

  const download = () => {
    window.open("../Image/resume.pdf")
}

    return (
      <div className='main' id='about'>
          <h1 className='about-heading'>About Me</h1><br />
        <div className='about-main'>
            <div>
              <img src={aboutImg} alt="" className='about-img'/>
            </div>
            <div className='about-text'>
                <h1>Hi I'm Bhavisha Nayi,</h1><br />
                <p className='about-para'>I have completed my bachelor's in GTU in G.E.C, Modasa in the course of Information Technology. I have also undergone training of Full Stack Web Development at Masai school and internship in python(django) at Maxgen, Ahmedabad.I want to become a Full Stack Web Developer and want to work in the software industry and gain experiences related to my work. I am looking forward to work in software industry and build real world projects to increase my knowledge and experiences as a Full Stack Web Developer.</p>

                <div className='down-btn'>
                  {/* <a href={item.resume} download>Resume</a> */}
                  {/* <a href="#" onclick='window.open({resume});return false;' download>Resume</a> */}
                  {/* <a onClick={download} download>Click Here</a> */}
                  <a href={resume} onClick={download} target="_blank" download>Resume</a>
                </div>
            </div>
        </div>
      </div>
    )
}

export default About
