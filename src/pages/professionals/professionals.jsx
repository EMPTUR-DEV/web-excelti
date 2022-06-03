import React,{useState,useEffect} from 'react'
import CardProfessional from '../../components/card-professional/card-professional'
import './professionals.scss';
import useProfessionals from '../../hooks/useProfessionals';
import { useTranslation } from "react-i18next";


const Professionals = () => {
    const { t } = useTranslation();
    const { getAllProfessionals } = useProfessionals();
    const [ professionals,setProfessionals ] = useState(null);

    useEffect(()=>{
        setProfessionals(getAllProfessionals());
    },[]);

    return (
        <div className='professionals-container'>
            <h2>{t("profesionales")}</h2>
            <div className='card-professionals-container'>
                { 
                    professionals ?
                        professionals.map(professional => (
                            <li><CardProfessional professional = {professional} showContacBox={true}/></li>
                    ))
                    :<></>
                }   
            </div>
        </div>
    )
}

export default Professionals
