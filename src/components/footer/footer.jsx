import React from 'react'
import ContactForm from '../contact-form/contact-form'
import './footer.scss'

const Footer = () => {
    return (
        <div className='footer-container'>
            Footer
            <div className="footer-grid">
                <div className="footer-grid-menu">
                    <nav>
                        Links
                        <ul>
                            <li>a</li>
                            <li>b</li>
                            <li>c</li>
                        </ul>
                    </nav>
                </div>
                <div className="footer-grid-form">
                    Formulario
                    <ContactForm/>
                </div>
                <div className="footer-grid-menu">
                    <nav>
                        Links
                        <ul>
                            <li>a</li>
                            <li>b</li>
                            <li>c</li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="footer-footer">
                Copyright
            </div>
        </div>
    )
}

export default Footer
