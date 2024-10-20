import React from 'react';
import './about.css'; // Import your CSS for styling

function About() {
    return (
        <div>
            {/* Navigation Bar */}
            <header>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="../Booking/booking.html">Booking</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </nav>
            </header>

            {/* About Section */}
            <section className="about-section">
                <div className="content">
                    <h1>About Us</h1>
                    <p>
                        oremlay ipsummyay olorday itsay ametyay , onsecteturcay adipisicingyay elityay , edsay oday 
                        eiusmoday emportay incididuntyay utyay aborelay etyay olorday agnamay iliquay . utyay enimyay 
                        adyay inimmay enimay , uisqay ostrudnay exercitationay ullamcoy aborislay isnay utyay 
                        aliquipay exyay eay odmodocay onsequatay .
                    </p>
                </div>
            </section>
        </div>
    );
}

export default About;
