import React from 'react'
import './Contact.css'
import email from '../Image/email.jpg'
import insta from '../Image/insta.jpg'
import linkedin from '../Image/linkedin.jpg'

function Contact(){
    return (
      <div className='contact-main' id='contact'>
        <div className='contact-heading'>
            <h1>Contact Me :-</h1>
        </div>
        <div className='contact-form'>
          <form action="mailto:nayibhavisha@gmail.com" method="post" enctype="text/plain">
            
            <label><button type='submit' className='btn'><i class="fa-solid fa-envelope fa-3x"></i></button></label>
          </form>
          <div className='AnotherLinks'>
              <a href="https://www.instagram.com/bhavi__281/"><i class="fa-brands fa-instagram-square fa-3x"></i></a>
              <a href="https://www.linkedin.com/in/bhavisha-nayi-2b683a211/"><i class="fa-brands fa-linkedin fa-3x"></i></a>
              <a href="https://github.com/Bhavisha2801"><i class="fa-brands fa-github fa-3x"></i></a>
              <a href="https://twitter.com/BhavishaNayi"><i className='fa-brands fa-twitter fa-3x'></i></a>
          </div>
        </div>
      </div>


    )
}

export default Contact
