
import styles from '../styles/Nav.module.css'
import { useState } from 'react';


const Nav = () => {

    const [show, setShow]


    return ( 
        <nav className={styles.nav}>
            <button onClick={ ()=>console.log('log')} >προσθήκη</button>
            <button>προβολή</button>

        </nav>
     );
}
 
export default Nav;