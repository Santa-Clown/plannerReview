
import styles from '../styles/Nav.module.css'
import Sign_Out from './signOut';


const Nav = ({ s_out}) => {
    return ( 
        <nav className={styles.nav}>
            <button></button>
            <Sign_Out s_out={s_out} />

        </nav>
     );
}
 
export default Nav;