import React from 'react'
import './Projects.css'
import projectOne from '../Image/proj-1.png'
import projectTwo from '../Image/proj-2.png'

function Projects() {
    return (
      <div className='project-main' id='projects'>
        <div className='project-heading'>
            <h1>Projects</h1>
        </div>
        <div className='project-card'>
          <div className='projOne'>
              <div className='project-img'>
                <a href="https://f-l-y-plane.netlify.app/"><img src={projectOne} alt="" /></a>
              </div>
              <div className='project-info'>
                  <a href="https://f-l-y-plane.netlify.app/" target="_blank">
                  <h1>Fly Plane</h1>
                  <p className='projInfoText'>A Flyplane is a Travells Website, where you can find places to Travel and book tickets.</p>
                  <p className='projInfoText'>A construct Week Project among three students while doing training in Masai School.</p>
                  <h3>Languages Used : HTML , CSS</h3>
                  </a>
                  <a target="_blank" href="https://github.com/Bhavisha2801/construct_week_1"><i className='fa-brands fa-github fa-3x'></i></a>
                  <a target="_blank" href="https://f-l-y-plane.netlify.app/"><i className='fa-brands fa-portfolio fa-3x'></i></a>
              </div>
          </div>
          <div className='projOne'>
              <div className='project-img'>
                <a href="https://apolloclone.netlify.app/"><img src={projectTwo} alt="" /></a>
              </div>
              <div className='project-info'>
                  <a href="https://apolloclone.netlify.app/" target="_blank">
                  <h1>Apollo Pharmacy</h1>
                  <p className='projInfoText'>A Apollo Pharmacy is a Medical website , where you can find medicines, consult with doctors online or you can book appointment to meet doctors ofline..</p>
                  <p className='projInfoText'>A construct Week Project among Four students while doing training in Masai School.</p>
                  <h3>Languages Used : HTML, CSS, JavaScript</h3>
                  </a>
                  <a target="_blank" href="https://github.com/Bhavisha2801/Apollo_Clone"><i className='fa-brands fa-github fa-3x'></i></a>
                  <a target="_blank" href="https://apolloclone.netlify.app/"><i className='fa-brands fa-portfolio fa-3x'></i></a>
              </div>
          </div>
        </div>
      </div>
    )
}

export default Projects
