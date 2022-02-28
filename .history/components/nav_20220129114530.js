
import styles from '../styles/Nav.module.css'
import { useState } from 'react';


const Nav = () => {

    const [show, setShow] = useState(true)
    const [add, setAdd] = useState(false)



    const setShow = () => {
        setShow(true)
        setAdd(false)
    }

    
    const setAdd2 = () => {
        setShow(false)
        setAdd(true)
    }
    



    return ( 
        <nav className={styles.nav}>
            <button onClick={ ()=>setAdd()} >προσθήκη</button>
            <button onClick={ ()=>setShow()}>προβολή</button>

        </nav>
     );
}
 
export default Nav;