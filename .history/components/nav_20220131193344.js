
import styles from '../styles/Nav.module.css'
import Sign_Out from './signOut';


const Nav = ({toggler , s_out}) => {
    return ( 
        <nav className={styles.nav}>
            <button onClick={ ()=>toggler('add')} >προσθήκη</button>
            <button onClick={ ()=>toggler('show')}>προβολή</button>
            <Sign_Out s_out />

        </nav>
     );
}
 
export default Nav;