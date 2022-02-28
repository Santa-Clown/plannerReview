
import styles from '../styles/Nav.module.css'
import sig


const Nav = ({toggler}) => {
    return ( 
        <nav className={styles.nav}>
            <button onClick={ ()=>toggler('add')} >προσθήκη</button>
            <button onClick={ ()=>toggler('show')}>προβολή</button>

        </nav>
     );
}
 
export default Nav;