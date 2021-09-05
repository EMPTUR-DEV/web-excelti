import React from "react";
import SpainFlag from "./spain-flag/spain-flag";
import BritainFlag from "./britain-flag/britain-flag";
import styles from "./flags.module.scss";

const Flags = () => {

const flags =[ <SpainFlag/>,<BritainFlag/> ]
 
return (
    <div className={styles.container}>
        {
            flags.map(flag =>flag )
        }
    </div>
)
}

export default Flags;