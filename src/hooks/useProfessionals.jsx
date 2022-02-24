const useProfessionals = () => {
    const professions ={
        1:'Traductor',
        2:'Interpreter',
        3:'Teacher'
    }
    
    const getAllProfessionals = () => {
        return  [
            {
                name: 'Johnny Lawrance',
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
                name: 'bob',
                contac:{
                    linkedin:'',
                    cv:''
                },
                profession:[
                    professions[1],
                    professions[2],
                    professions[3],
                ]
            },
            {
                name: 'connor',
                contac:{
                    linkedin:'',
                    cv:''
                },
                profession:[
                    professions[2],
                ]
            },
            {
                name: 'God',
                contac:{
                    linkedin:'',
                    cv:''
                },
                profession:[
                    professions[1],
                ]
            },
            {
                name: 'Stevem',
                contac:{
                    linkedin:'',
                    cv:''
                },
                profession:[
                    professions[3],
                ]
            },
            {
                name: 'Mike',
                contac:{
                    linkedin:'',
                    cv:''
                },
                profession:[
                    professions[1],
                    professions[2],
                    professions[3],
                ]
            },
            {
                name: 'John Week',
                contac:{
                    linkedin:'',
                    cv:''
                },
                profession:[
                    professions[1],
                    professions[3],
                ]
            },
            {
                name: 'John bonachon',
                contac:{
                    linkedin:'',
                    cv:''
                },
                profession:[
                    professions[1],
                    professions[2],
                ]
            }
        ];
    };

    return {
        getAllProfessionals
    }
}

export default useProfessionals;