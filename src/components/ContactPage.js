import React from 'react';
import './ContactPage.css';
import EmailIcon from '@material-ui/icons/Email';


function ContactPage() {
  return (
    <div className='contact-container' id ="contact">
      <section className='contact-subscription'>
        <p className='contact-subscription-heading'>
        Please reach out to us …        </p>


        <div>
                <ul>
                    <li>If you want to collaborate on industrial hardware product design in 5G and
                        IoT space
                    </li>
                    <li>
                        If you are a freelance/ engineering consultant, we have interesting
                        opportunities for you
                    </li>
                    <li>
                        If you are passionate about training students and engineers in latest 5G
                        technologies
                    </li>
                </ul>
                <p className="address">
                    The company is incubated @<br/>

                    Deshila Technology Research Institute<br/>

                    SJCE-STEP, JSS Technical Institutions Campus, Manasagangothri, Mysuru – 570006
                </p>
            </div>
            <div className="email">
              
              <EmailIcon className="email__icon" />
            
          <a href="mailto:kcmarathe@ieee.org">Kiran Marathe</a>
         
              </div>
     
       
      </section>


    </div>
  );
}

export default ContactPage;
