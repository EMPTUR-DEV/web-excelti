import { useTranslation } from "react-i18next";

const useProfessionals = () => {
    const { t } = useTranslation();

    const professions ={
        1:t("traductora"),
        2:t("interpreter"),
        3:t("teacher"),
        4:t("leader")
    }
    
    const getAllProfessionals = () => {
        return  [
            {
                name:'Olga Alvarez',
                image:'professionals/olga.jpg',
                contac:{
                    linkedin:'https://www.linkedin.com/in/olga-alvarez-barr-4067635b/',
                    cv:'http://www.excelti.com.ar/cv-olga-alvarez.html'
                },
                profession:[
                    professions[4],
                    professions[1],
                    professions[2],
                    professions[3]
                ]
            },
            {
                name: 'Cynthia Abad Quintaié',
                image:'professionals/cintia.jpg',
                contac:{
                    linkedin:'https://www.linkedin.com/in/cynthia-abad-quintai%C3%A9-424ab787/',
                    cv:'http://www.excelti.com.ar/cv-cynthia-abad.html'
                },
                profession:[
                    professions[1],
                    professions[2],
                ]
            },
            {
                name: 'Cristina Cucchi',
                image:'',
                contac:{
                    linkedin:'',
                    cv:'http://www.excelti.com.ar/cv-cristina-cucchi.html'
                },
                profession:[
                    professions[1],
                    professions[2],
                    
                ]
            },
            {
                name: 'Pamela Fioravanti',
                image:'',
                contac:{
                    linkedin:'',
                    cv:'http://www.excelti.com.ar/cv-pamela-fioravanti.html'
                },
                profession:[
                    professions[1],
                ]
            },
            {
                name: 'Nancy Lynch',
                image:'',
                contac:{
                    linkedin:'',
                    cv:'http://www.excelti.com.ar/cv-nancy-lynch.html'
                },
                profession:[
                    professions[1],
                ]
            },
            {
                name: 'Laura Tavolai',
                image:'',
                contac:{
                    linkedin:'',
                    cv:'http://www.excelti.com.ar/cv-laura-tavolai.html'
                },
                profession:[
                    professions[1],
                    professions[2],
                ]
            },
            {
                name: 'Melisa Tello',
                image:'professionals/melisa.jpg',
                contac:{
                    linkedin:'https://www.linkedin.com/in/melisa-tello-2400a821b/',
                    cv:''
                },
                profession:[
                    professions[1],
                    
                ]
            },
            
            {
                name: 'Gabriela Yañez',
                image:'professionals/gabriela.jpg',
                contac:{
                    linkedin:'https://www.linkedin.com/in/gabriela-y%C3%A1%C3%B1ez-7447b62b/',
                    cv:'http://www.excelti.com.ar/cv-gabriela-yanez.html'
                },
                profession:[
                    professions[1],
                    professions[2],
                    professions[3],
                    
                ]
            },
            {
                name: 'Mariana Spitalnik',
                image:'professionals/mariana.jpg',
                contac:{
                    linkedin:'https://www.linkedin.com/in/mariana-spitalnik-9338a512/',
                    cv:''
                },
                profession:[
                    professions[1],
                    
                ]
            },
            {
                name: 'Violeta Harfuch',
                image:'professionals/violeta.jpg',
                contac:{
                    linkedin:'https://www.linkedin.com/in/violeta-harfuch-54430745/',
                    cv:''
                },
                profession:[
                    professions[2],
                ]
            },
            {
                name: 'Isolda Rodríguez Villegas',
                image:'',
                contac:{
                    linkedin:'',
                    cv:''
                },
                profession:[
                    professions[2],
                ]
            },
            {
                name: 'Vivien Perez Moran',
                image:'',
                contac:{
                    linkedin:'',
                    cv:''
                },
                profession:[
                    professions[2],
                    
                ]
            },
            {
                name: 'Elisa Bianchi',
                image:'professionals/elisa.jpg',
                contac:{
                    linkedin:'https://www.linkedin.com/in/elisa-bianchi-b4b3536/',
                    cv:''
                },
                profession:[
                    
                    professions[3],
                ]
            }
        ];
    };

    return {
        getAllProfessionals
    }
}

export default useProfessionals;