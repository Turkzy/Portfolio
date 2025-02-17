import React from 'react'
import "./Contact.css"

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "2b44c7e7-474b-4df1-a917-66f7abd73963");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className='Contact'>
      <div className='contact-title'>
        <h1>Get In Touch</h1>
      </div>
      <div className='contact-section'>
        <div className='contact-left'>
            <h1>Contact <span className='title-Me'>Me!</span></h1>
            <div className='contact-details'>
                <span><ion-icon name="call-outline"></ion-icon> +63 947-771-8692</span>
                <span><ion-icon name="mail-outline"></ion-icon> sisonjohnalbert0422@gmail.com</span>
                <span><ion-icon name="location-outline"></ion-icon> Philippines, Manila</span>
            </div>
        </div>
        <form onSubmit={onSubmit}className='contact-right'>
            <label htmlFor=''>Your Name</label>
            <input type='text' placeholder ='Enter your name' name ="name"></input> 
            <label htmlFor=''>Your Email</label>
            <input type="text" placeholder='Enter your email' name='email'></input>
            <label htmlFor=''>Write your Message here</label>
            <textarea name='message' placeholder='Enter your message'></textarea>
            <button type="submit" className='contact-submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
