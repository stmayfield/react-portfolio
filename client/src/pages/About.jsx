import React from 'react';
import Header from '../components/Header'
import profile from '../assets/img/profile.png'

function About() {

    return (

        <div>
            <Header header="About Me" />
            <div className="row">
                <div className="col-lg-1">

                </div>
                <div className="col-lg-4 p-lg-2 p-4 text-center">
                    <img src={profile} className="img-fluid" alt="Portrait headshot of Stephen Mayfield."></img>
                </div>
                <div className="col-lg-6 mt-lg-0 mt-4">
                    <p className="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, similique in
                    tempora
                    officia ea rerum exercitationem libero dignissimos ex nesciunt quod cumque explicabo asperiores
                        nulla!</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, repudiandae.
                    Pariatur illo dolore, dolorem recusandae dolores quo autem sapiente odio deleniti quasi debitis
                    qui
                    ullam, nostrum voluptatem ducimus dolorum earum. Lorem ipsum dolor sit amet consectetur
                    adipisicing
                    elit. Quidem, dignissimos ullam. Distinctio recusandae reiciendis ad itaque voluptates
                    repellendus,
                    illum saepe quas quasi nesciunt optio consectetur sequi laboriosam dignissimos voluptatum
                    voluptate.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa tempore a nesciunt sunt
                    accusantium
                    eveniet voluptate at aperiam itaque molestias excepturi porro architecto modi ad, sit, in
                    ratione
                        repellendus natus.</p>

                </div>
                <div className="col-lg-1">

                </div>
            </div>

            <hr></hr>

        </div>
    )
};

export default About;