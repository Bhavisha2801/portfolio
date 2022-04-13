import React from 'react'
import './Contact.css'

function Contact(){
    return (
      <div className='contact-main' id='contact'>
        <div className='contact-heading'>
            <h1>Contact Me</h1>
        </div>
        <div className='contact-form'>
          <form action="mailto:nayibhavisha@gmail.com" method="post" enctype="text/plain">
            <button type='submit' className='form-btn'><i class="fa-solid fa-envelope fa-3x"></i></button>
          </form>
          <div className='AnotherLinks'>
              <a target="_blank" href="https://www.instagram.com/bhavi__281/"><i class="fa-brands fa-instagram-square fa-3x"></i></a>
              <a target="_blank" href="https://www.linkedin.com/in/bhavisha-nayi-2b683a211/"><i class="fa-brands fa-linkedin fa-3x"></i></a>
              <a target="_blank" href="https://github.com/Bhavisha2801"><i class="fa-brands fa-github fa-3x"></i></a>
              <a target="_blank" href="https://twitter.com/BhavishaNayi"><i className='fa-brands fa-twitter fa-3x'></i></a>
          </div>
        </div>
      </div>


    )
}

export default Contact
