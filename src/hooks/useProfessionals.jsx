const useProfessionals = () => {
    const professions ={
        1:'Traductor',
        2:'Interpreter',
        3:'Teacher',
        4:'Lead'
    }
    
    const getAllProfessionals = () => {
        return  [
            {
                name:'Olga Alvarez',
                contac:{
                    linkedin:'https://www.linkedin.com/in/olga-alvarez-barr-4067635b/',
                    cv:''
                },
                profession:[
                    professions[1],
                    professions[2],
                    professions[3],
                    professions[4]
                ]
            },
            {
                name: 'Cynthia Abad Quintaié',
                contac:{
                    linkedin:'https://www.linkedin.com/in/cynthia-abad-quintai%C3%A9-424ab787/',
                    cv:''
                },
                profession:[
                    professions[1],
                    professions[2],
                ]
            },
            {
                name: 'Cristina Cucchi',
                contac:{
                    linkedin:'',
                    cv:'http://www.excelti.com.ar/cv-cristina-cucchi.html'
                },
                profession:[
                    professions[1],
                    professions[2],
                    professions[3],
                ]
            },
            {
                name: 'Pamela Fioravanti',
                contac:{
                    linkedin:'',
                    cv:''
                },
                profession:[
                    professions[1],
                ]
            },
            {
                name: 'Nancy Lynch',
                contac:{
                    linkedin:'',
                    cv:''
                },
                profession:[
                    professions[1],
                ]
            },
            {
                name: 'Laura Tavolai',
                contac:{
                    linkedin:'',
                    cv:''
                },
                profession:[
                    professions[1],
                    professions[2],
                ]
            },
            {
                name: 'Melisa Tello',
                contac:{
                    linkedin:'https://www.linkedin.com/in/melisa-tello-2400a821b/',
                    cv:''
                },
                profession:[
                    professions[1],
                    professions[2],
                ]
            },
            
            {
                name: 'Gabriela Yañez',
                contac:{
                    linkedin:'https://www.linkedin.com/in/gabriela-y%C3%A1%C3%B1ez-7447b62b/',
                    cv:''
                },
                profession:[
                    professions[1],
                    professions[2],
                    professions[3],
                    
                ]
            },
            {
                name: 'Mariana Spitalnik',
                contac:{
                    linkedin:'https://www.linkedin.com/in/mariana-spitalnik-9338a512/',
                    cv:''
                },
                profession:[
                    professions[1],
                    professions[3],
                ]
            },
            {
                name: 'Violeta Harfuch',
                contac:{
                    linkedin:'',
                    cv:''
                },
                profession:[
                    professions[2],
                ]
            },
            {
                name: 'Isolda Rodríguez Villegas',
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
                contac:{
                    linkedin:'',
                    cv:''
                },
                profession:[
                    professions[2],
                    professions[3],
                ]
            },
            {
                name: 'Elisa Bianchi',
                contac:{
                    linkedin:'',
                    cv:''
                },
                profession:[
                    professions[2],
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