import React from 'react'
import './Skills.css'

function Skills(){
    return (
      <div className='skills-main' id='skills'>
          <div className='skills-heading'>
              <h1>Skills</h1>
          </div>
          <div className='Skills-info'>
              <div className='skill-card'>
                  <img src="https://i.ibb.co/5rD6Pq1/icons8-html-5-50.png" alt="" />
                  <h3>HTML</h3>
              </div>
              <div className='skill-card'>
                  <img src="https://i.ibb.co/T88rJN8/icons8-css3-50.png" alt="" />
                  <h3>CSS</h3>
              </div>
              <div className='skill-card'>
                  <img src="https://i.ibb.co/vDsGhPS/icons8-javascript-50.png" alt="" />
                  <h3>JavaScript</h3>
              </div>
              <div className='skill-card'>
                  <img src="https://i.ibb.co/2SVxPRB/icons8-react-native-50.png" alt="" />
                  <h3>React</h3>
              </div>
              <div className='skill-card'>
                  <img src="https://i.ibb.co/w6qPxRy/icons8-redux-50.png" alt="" />
                  <h3>Redux</h3>
              </div>
              <div className='skill-card'>
                  <img src="https://i.ibb.co/VVxWD39/icons8-nodejs-50.png" alt="" />
                  <h3>NodeJS</h3>
              </div>
              <div className='skill-card'>
                  <img src="https://i.ibb.co/zmXSNcf/express-js-161052138fa79136c0474521906b55e2-1.png" alt="" />
                  <h3>ExpressJS</h3>
              </div>
              <div className='skill-card'>
                  <img src="https://i.ibb.co/y5H5FF5/icons8-mongodb-50.png" alt="" />
                  <h3>MongoDB</h3>
              </div>
              <div className='skill-card'>
                  <img src="https://i.ibb.co/0ZDN9v7/icons8-algorithm-50.png" alt="" />
                  <h3>DS & Algo</h3>
              </div>
          </div>
      </div>
    )
}

export default Skills
