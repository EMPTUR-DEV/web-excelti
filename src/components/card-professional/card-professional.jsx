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
import ProfessionalDescription from './professional-description/professional-description'

const CardProfessional = ({showContacBox,professions,name}) => {
    return (
        <CardProfessionalContainer>
            
            <ProfessionalImage>
                    <img src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg" alt="" />
                </ProfessionalImage>
            
            <ProfessionalDataContainer>
                <NameTitle>{name}</NameTitle>
                {
                    professions ?
                    <ProfessionalDescription professions={professions}/>
                    :<></>
                }
                {
                    showContacBox?
                    <ContactBox>
                        <span>Contacto</span>
                        <ProfessionalSocialNetworksContainer>
                            <SocialIconContainer>
                                <SocialIcon  url="https://linkedin.com/" network='linkedin' fgColor="#fff"/>
                            </SocialIconContainer>
                            <SocialIconContainer>
                                <CvLink><span>CV</span></CvLink>
                            </SocialIconContainer>
                        </ProfessionalSocialNetworksContainer>
                    </ContactBox>
                    :<></>
                }
            </ProfessionalDataContainer>
        </CardProfessionalContainer>
    )
}

export default CardProfessional
