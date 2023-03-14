import { formatMs } from '@material-ui/core'
import React from 'react'
import "./Contact.css"
const Contact = () => {
  return (
    <div className='contact-form'>
        <div className="w-left">
            <div className="awesome">
                <span>Get in touch</span>
                <span>Contact Me</span>
                <div className="blur s-blur1" style={{background:"#ABF1FF94"}}>
                </div>
            </div>

            <div className="c-right">
                <form>
                    <input type="text" name="user_name" className="user" placeholder='Name' />
                    <input type="email" name="user_email" className="user" placeholder='Email' />
                    <textarea name="message" className='user' cols="30" rows="10" placeholder='Meassage'></textarea>
                    <input type="submit" value="Send" className='button' />
                    <div className="blur c-blur1" style={{background:"var(--purple)"}}></div>
                </form>
            </div>
        </div>      
    </div>
  )
}

export default Contact

