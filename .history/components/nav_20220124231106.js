
import styles from '../styles/Nav.module.css'


const Nav = () => {
    return ( 
        <nav className={styles.nav}>
            <button onClick={ ()=>console.log('log')} >ν</button>
            <button>button2</button>

        </nav>
     );
}
 
export default Nav;