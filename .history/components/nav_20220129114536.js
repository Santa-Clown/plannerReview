
import styles from '../styles/Nav.module.css'
import { useState } from 'react';


const Nav = () => {

    const [show, setShow] = useState(true)
    const [add, setAdd] = useState(false)



    const setShow2 = () => {
        setShow(true)
        setAdd(false)
    }

    
    const setAdd2 = () => {
        setShow(false)
        setAdd(true)
    }
    



    return ( 
        <nav className={styles.nav}>
            <button onClick={ ()=>setAdd2()} >προσθήκη</button>
            <button onClick={ ()=>setShow2()}>προβολή</button>

        </nav>
     );
}
 
export default Nav;