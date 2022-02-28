
import styles from '../styles/Nav.module.css'
import { useState } from 'react';


const Nav = () => {

    const [show, setShow] = useState(true)
    const [add, setAdd] = useState(false)



    const setShow = () => {
        setShow(true)
        setAdd(false)
    }

    
    const setAdd = () => {
        setShow(true)
        setAdd(false)
    }
    



    return ( 
        <nav className={styles.nav}>
            <button onClick={ ()=>console.log('log')} >προσθήκη</button>
            <button>προβολή</button>

        </nav>
     );
}
 
export default Nav;