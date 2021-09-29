import styles from './nav-bar.module.scss';
import NavHeader from './nav-header/nav-header';
import { useState,useEffect } from 'react';

const NavBar = () => {
    const [ items,setItems ] = useState([]);

    useEffect(()=>{
        setItems(
            [{name:'Home',link:'/', childrens:[]},
            {name:'Traducción', link:'/', childrens:[]},
            {name:'Capacitación', link:'/', childrens:[{name:'Módulo 1',link:'/'},{name:'Módulo 2',link:'/'},{name:'Módulo 3',link:'/'},{name:'Módulo 4',link:'/'},{name:'Módulo 4',link:'/'},{name:'Módulo 4',link:'/'},{name:'Módulo 4',link:'/'},{name:'Módulo 4',link:'/'},{name:'Módulo 4',link:'/'},{name:'Módulo 4',link:'/'},{name:'Módulo 4',link:'/'},{name:'Módulo 4',link:'/'},{name:'Módulo 4',link:'/'},{name:'Módulo 4',link:'/'},{name:'Módulo 4',link:'/'}]},
            {name:'E-learning', link:'/', childrens:[]},
            {name:'Servicios audiovisuales', link:'/', childrens:[]},
            {name:'Nuestros profesionales', link:'/', childrens:[]},
            {name:'Publicaciones', link:'/', childrens:[{name:'Home',link:'/', childrens:[]},
            {name:'Traducción', link:'/', childrens:[{name:'Home',link:'/', childrens:[]},
            {name:'Traducción', link:'/', childrens:[]},
            {name:'Capacitación', link:'/', childrens:[{name:'Módulo 1',link:'/'},{name:'Módulo 2',link:'/'},{name:'Módulo 3',link:'/'},{name:'Módulo 4',link:'/'},{name:'Módulo 4',link:'/'},{name:'Módulo 4',link:'/'},{name:'Módulo 4',link:'/'},{name:'Módulo 4',link:'/'},{name:'Módulo 4',link:'/'},{name:'Módulo 4',link:'/'},{name:'Módulo 4',link:'/'},{name:'Módulo 4',link:'/'},{name:'Módulo 4',link:'/'},{name:'Módulo 4',link:'/'},{name:'Módulo 4',link:'/'}]},
            {name:'E-learning', link:'/', childrens:[]},
            {name:'Servicios audiovisuales', link:'/', childrens:[]},
            {name:'Nuestros profesionales', link:'/', childrens:[]}]},
            {name:'Capacitación', link:'/', childrens:[{name:'Módulo 1',link:'/'},{name:'Módulo 2',link:'/'},{name:'Módulo 3',link:'/'},{name:'Módulo 4',link:'/'},{name:'Módulo 4',link:'/'},{name:'Módulo 4',link:'/'},{name:'Módulo 4',link:'/'},{name:'Módulo 4',link:'/'},{name:'Módulo 4',link:'/'},{name:'Módulo 4',link:'/'},{name:'Módulo 4',link:'/'},{name:'Módulo 4',link:'/'},{name:'Módulo 4',link:'/'},{name:'Módulo 4',link:'/'},{name:'Módulo 4',link:'/'}]},
            {name:'E-learning', link:'/', childrens:[]},
            {name:'Servicios audiovisuales', link:'/', childrens:[]},
            {name:'Nuestros profesionales', link:'/', childrens:[]}]}
            ]);
    },[]);

   const renderMenu=(items)=>{
        return items.map(item => {
            return <NavHeader data={item}/>
        });
    }

    return (<div className={styles.container}>

        <img className={styles.bars} src={'header/bars.svg'}/>
        <div className={styles.nodeContainer}>
            {
                renderMenu(items)
            }
        </div>
        </div>);
};

export default NavBar;