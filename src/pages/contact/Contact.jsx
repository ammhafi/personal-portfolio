import React, { useRef, useState } from 'react'
import styles from './Contact.module.scss'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from "@emailjs/browser";

const Contact = () => {

const form = useRef()
const [buttonText, setButtonText] = useState('Send Message');


const handleSubmit = (e) => {
    e.preventDefault()
    setButtonText('Sending Message...')
    emailjs
    .sendForm(
        "service_rhhgo44",
        "template_sb3e94w",
        form.current,
        "FdVXgomaPNbgoW3c2"
      )
    .then(
        (result) => {
          toast.success("Message sucessfully sent!");
        },
        (error) => {
          toast.error(error.text);
        }
      );
    setButtonText("Send");
    e.target.reset();
}

return (
    <div className={styles.contact} id="contact">
            <ToastContainer theme='dark' />
            <div className={styles.heading}>
                <h1 data-aos='flip-right' className='gradient__text'>Keep in Touch</h1>
            </div>
            <div className={styles.content}>
                <form ref={form} onSubmit={handleSubmit}>
                    <div className={styles.flex}>
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Name"
                        data-aos='flip-left'
                        required
                        />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Email"
                        data-aos='flip-right'
                        required
                        />
                    </div>
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        data-aos='flip-up'
                        required
                    />
                    <textarea name="message" data-aos='flip-down' cols="30" rows="10" placeholder='Message'></textarea>
                    <button data-aos='zoom-in-up'>{buttonText}</button>
                </form>
            </div>
    </div>
  )
}

export default Contact
