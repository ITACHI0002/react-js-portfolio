import './contact.css'
import Mail from '../../img/mail.png'
import Location from '../../img/location.png'
import {useRef} from 'react'
import emailjs from 'emailjs-com';
import { useState } from 'react';

const Contact = () => {
       const formRef = useRef()
       const [done, setDone] = useState(false)
       const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_id', 'template_id', formRef.current, 'public_key')
            .then((result) => {
                console.log(result.text);
                setDone(true)
             }, (error) => {
                console.log(error.text);
                
            });
  };
       
    return(
        <div className='c'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Reach out to me</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Mail} alt="" className="c-icon" />//your email
                        </div>
                        <div className='c-info-item'>
                            <img src={Location} alt="" className="c-icon" />//your address
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b> Get in touch. <br/>Let's be friends. <b>Freelancing starting soon.</b>
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows='5' placeholder="Message" name="user_message" />
                        <button>Submit</button>
                        {done && "Thank you for contacting me."}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
