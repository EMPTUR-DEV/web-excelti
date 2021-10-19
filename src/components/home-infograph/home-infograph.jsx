import { useState,useEffect, React}  from 'react'
import styles from './home-infograph.module.scss'
/*import CardInfograph from './card-infograph/card-infograph'*/
import InfoGraph2 from './infograph-2/infograph-2'


/* CardInfograph title='Capacitación'/>
<CardInfograph title='Traducción'/>
<CardInfograph title='Audiovisuales'/>
<CardInfograph title='Docentes'/>
*/

const HomeInfograph = (props) => {

    const [ items,setItems ] = useState(
        [
            {name:'T'},
            {name:'C'},
            {name:'E'},
            {name:'S'},
            {name:'N '},
            {name:'P'}
            ]
    );

    useEffect(()=>{
        setItems(
            [
            {name:'Traducción'},
            {name:'Capacitación'},
            {name:'E-learning'},
            {name:'Servicios audiovisuales'},
            {name:'Nuestros profesionales'},
            {name:'Publicaciones'}
            ]
            );
            console.log(items)
    },[]);
    
    return (
        <div className={styles.container}>
                <InfoGraph2 items={items}/>
        </div>
    )
}

export default HomeInfograph
