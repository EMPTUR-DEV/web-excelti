import React, {useState} from 'react';
import {ContactButtonContainer, Button, ContactFormContainer} from './contact-button.styles'
import ContactForm from '../contact-form/contact-form.jsx'


const ContactButton = () => {

    const [itemActive, setItemActive] = useState(false);

  return <ContactButtonContainer 
            active={itemActive}
            >
                            <Button 
            active={itemActive}
            onClick={()=>setItemActive(!itemActive)}>
                <span>Contactanos</span>
            </Button>
            <ContactFormContainer>
                <ContactForm />
            </ContactFormContainer>
            


        </ContactButtonContainer>;
};

export default ContactButton;
