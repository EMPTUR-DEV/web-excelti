import React from 'react'
import CardProfessional from './card-professional/card-professional'
import './professionals.scss'

const Professionals = () => {
    return (
        <div className='professionals-container'>
            <h2>Nuestros Profesionales</h2>
            <div className='card-professionals-container'>
                <li><CardProfessional/></li>
                <li><CardProfessional/></li>
            </div>
        </div>
    )
}

export default Professionals
