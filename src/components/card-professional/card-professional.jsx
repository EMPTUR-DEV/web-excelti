import React from 'react'
import {CardProfessionalContainer,
        ProfessionalImageContainer,
        ProfessionalDataContainer,
        ProfessionalImage,
        NameTitle,
        ProfessionTitle,
        ContactBox,
        ProfessionalSocialNetworksContainer,
        SocialIconContainer
    } from './card-professional.styles'

import {SocialIcon} from 'react-social-icons'

const CardProfessional = () => {
    return (
        <CardProfessionalContainer>
            <ProfessionalImageContainer>
                <ProfessionalImage>
                    <img src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg" alt="" />
                </ProfessionalImage>
            </ProfessionalImageContainer>
            <ProfessionalDataContainer>
                <NameTitle>Lucas Turco</NameTitle>
                <ProfessionTitle><span>Profesión:</span> Poseidonearse a Artemisa</ProfessionTitle>
                <ContactBox>
                    <span>Contacto</span>
                    <ProfessionalSocialNetworksContainer>
                        <SocialIconContainer>
                            <SocialIcon url="https://facebook.com/" network='facebook'  fgColor="#fff"/>
                        </SocialIconContainer>
                        <SocialIconContainer>
                            <SocialIcon  url="https://twitter.com/" network="twitter" fgColor="#fff"/>
                        </SocialIconContainer>
                        <SocialIconContainer>
                            <SocialIcon  url="https://instagram.com/" network='instagram' fgColor="#fff"/>
                        </SocialIconContainer>
                        <SocialIconContainer>
                            <SocialIcon  url="https://linkedin.com/" network='linkedin' fgColor="#fff"/>
                        </SocialIconContainer>
                    </ProfessionalSocialNetworksContainer>
                </ContactBox>
            </ProfessionalDataContainer>
        </CardProfessionalContainer>
    )
}

export default CardProfessional
