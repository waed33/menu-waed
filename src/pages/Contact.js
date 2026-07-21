import styles from "../styles/contact.css";


function Contact(){

    return(

        <section className="contact-page">


            <div className="contact-header">

                <span>
                    CONTACT US
                </span>

                <h1>
                    Get In Touch With Royal Taste
                </h1>

                <p>
                    We are always happy to welcome you.
                    Visit one of our branches or contact us anytime.
                </p>

            </div>





            <div className="contact-container">



                {/* Branches */}

                <div className="contact-box">


                    <h2>
                        📍 Our Branches
                    </h2>


                    <p>
                        Beirut Branch
                    </p>


                    <p>
                        Jounieh Branch
                    </p>


                    <p>
                        Tripoli Branch
                    </p>


                </div>






                {/* Contact */}

                <div className="contact-box">


                    <h2>
                        📞 Contact Info
                    </h2>


                    <p>
                        ✉ royaltaste@gmail.com
                    </p>


                    <p>
                        📞 +961 70 123 456
                    </p>


                    <p>
                        🕒 Every Day: 10 AM - 12 PM
                    </p>


                </div>






                {/* Social */}

                <div className="contact-box">


                    <h2>
                        🌐 Follow Us
                    </h2>


                    <a href="#">
                        📸 Instagram
                    </a>


                    <a href="#">
                        📘 Facebook
                    </a>


                    <a href="#">
                        🎵 TikTok
                    </a>


                </div>



            </div>



        </section>

    );

}


export default Contact;