import React, { useState } from 'react'

const ContactFormSection = () => {
    const [contactForm, setContactForm] = useState ({name: '', email:'', comment:''})
    const [formErrors, setFormErrors] = useState ({})
    const [submitted, setSubmitted] = useState (false)

    const validate = (values) => {
        const errors = {}
        const regex_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const regex_name = /^[A-Za-z]+$/
 

        if(!values.name)
            errors.name = "Tell us your name please"
        else if(values.name.length < 2)
        errors.name = "Too short darling, minimum two characters."
        else if(values.name.length > 15)
        errors.name = "Damn that is a long name, maximum 15 characters"
        else if(!regex_name.test(values.name))
        errors.name = "Ony letters in your name, thank u"
        

        if(!values.email)
        errors.email = "We need your e-mail address, don't be shy"
        else if(!regex_email.test(values.email))
        errors.email = "You must enter a valid e-mail address (eg. name@domain.com)"

        if(!values.comment)
        errors.comment = "Leave a comment would you"
        else if(values.comment.length < 5)
        errors.comment = "Give us at least five characters please"
        else if(values.comment.length > 300)
        errors.comment = "That is too long, ain't nobody got time for that, maximum 300 characters."

        if(Object.keys(errors).length === 0)
           setSubmitted(true)
        else    
         setSubmitted(false)

        return errors; 
    }

    const handleChange = (e) => {
        const {id, value} = e.target
        setContactForm({...contactForm, [id]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault ()
        setFormErrors (validate(contactForm))
    }


    return (
        <section className="contact-form">
            <div className="container">
                <h2>Come in Contact with Us</h2>
                <form onSubmit={handleSubmit} noValidate>
                    <div>
                        <input id="name" type="text" placeholder="Your Name" value={contactForm.name} onChange={handleChange} />
                        <div className="errorMessage">{formErrors.name}</div>
                    </div>
                    <div>
                        <input id="email" type="email" placeholder="Your Mail" value={contactForm.email} onChange={handleChange} />
                        <div className="errorMessage">{formErrors.email}</div>
                    </div>
                    <div className="textarea">
                        <textarea id="comment" placeholder="Comments" value={contactForm.comment} onChange={handleChange} ></textarea>
                        <div className="errorMessage">{formErrors.comment}</div>
                    </div>
                    <div className="formBtn">
                        <button type="submit" className="btn-theme" >Post Comments</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactFormSection