
import styles from '../styles/Nav.module.css'
const {  } = this.state;



const Nav = () => {
    return ( 
        <nav className={styles.nav}>
            <button onClick={ ()=>console.log('log')} >προσθήκη</button>
            <button>προβολή</button>

        </nav>
     );
}
 
export default Nav;