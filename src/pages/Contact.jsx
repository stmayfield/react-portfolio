import React from 'react';
import Header from '../components/Header'
import ContactForm from '../components/ContactForm'
import image1 from '../assets/img/contact_img1.png'
import image2 from '../assets/img/contact_img2.png'

function Contact() {

    return (

        <div>
            <Header header="Contact" />

            <div classNameName="row">
                <div className="col-md-4 py-3">
                    <div className="row">
                        <img src={image1} className="img-fluid rounded m-auto pb-1 d-block" width="300"
                            height="300"
                            alt="Stock image of desk with flat screen, keyboard, and phone. Photo by Daniel Korpai on Unsplash."></img>
                    </div>
                    <div className="row">
                        <img src={image2} className="img-fluid rounded m-auto pt-1 d-block" width="300"
                            height="300"
                            alt="Stock image of shelf with computing books and cactus plant. Photo by Greg Rakozy on Unsplash."></img>
                    </div>
                </div>

                <ContactForm />

            </div>



        </div>
    )
};

export default Contact;