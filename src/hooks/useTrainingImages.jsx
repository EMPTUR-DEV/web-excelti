const useTrainingImages = () => {
    
    const getTrainingImages = (topic) => {
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
           
        ];
    };

    return {
        getTrainingImages
    }
}

export default useTrainingImages;