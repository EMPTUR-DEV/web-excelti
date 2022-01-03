import React from 'react'
import {CardProfessionalContainer,
        
        ProfessionalDataContainer,
        ProfessionalImage,
        NameTitle,
        ProfessionTitle,
        ContactBox,
        ProfessionalSocialNetworksContainer,
        SocialIconContainer,
        CvLink
    } from './card-professional.styles'

import {SocialIcon} from 'react-social-icons'

const CardProfessional = () => {
    return (
        <CardProfessionalContainer>
            
            <ProfessionalImage>
                    <img src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg" alt="" />
                </ProfessionalImage>
            
            <ProfessionalDataContainer>
                <NameTitle>Lucas Turco</NameTitle>
                <ProfessionTitle><span>Profesión:</span> Lorem ipsum dolor sit amet consectetur adipisicing </ProfessionTitle>
                <ContactBox>
                    <span>Contacto</span>
                    <ProfessionalSocialNetworksContainer>
                      {/*   <SocialIconContainer>
                            <SocialIcon url="https://facebook.com/" network='facebook'  fgColor="#fff"/>
                        </SocialIconContainer>
                        <SocialIconContainer>
                            <SocialIcon  url="https://twitter.com/" network="twitter" fgColor="#fff"/>
                        </SocialIconContainer>
                        <SocialIconContainer>
                            <SocialIcon  url="https://instagram.com/" network='instagram' fgColor="#fff"/>
                        </SocialIconContainer> */}
                        <SocialIconContainer>
                            <SocialIcon  url="https://linkedin.com/" network='linkedin' fgColor="#fff"/>
                        </SocialIconContainer>
                       {/*  <SocialIconContainer>
                            <SocialIcon  url="" network='email' fgColor="#fff"/>
                        </SocialIconContainer> */}
                        <SocialIconContainer>
                            <CvLink><span>CV</span></CvLink>
                        </SocialIconContainer>
                    </ProfessionalSocialNetworksContainer>
                </ContactBox>
            </ProfessionalDataContainer>
        </CardProfessionalContainer>
    )
}

export default CardProfessional
