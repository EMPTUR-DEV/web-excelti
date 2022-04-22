import React from 'react'
import {CardProfessionalContainer,
        ProfessionalDataContainer,
        ProfessionalImage,
        NameTitle,
        ContactBox,
        ProfessionalSocialNetworksContainer,
        SocialIconContainer,
        CvLink
    } from './card-professional.styles'

import {SocialIcon} from 'react-social-icons'
import ProfessionalDescription from './professional-description/professional-description'

const CardProfessional = ({professional,showContacBox}) => {
    const {name,profession:professions,name:key,image,contac} = professional;
    const imgDefault = "https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg";
    
    return (
        <CardProfessionalContainer key={key}>
            
            <ProfessionalImage>
                    <img src={image?image:imgDefault} alt="" />
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
                        <ProfessionalSocialNetworksContainer>
                            <SocialIconContainer>
                            {contac.linkedin?<SocialIcon  url={encodeURI(contac.linkedin)} network='linkedin' fgColor="#fff"/>:<></>}
                            </SocialIconContainer>
                            <SocialIconContainer>
                                {contac.cv?<a href={encodeURI(contac.cv)} download><CvLink><span>CV</span></CvLink></a>:<></>}
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
