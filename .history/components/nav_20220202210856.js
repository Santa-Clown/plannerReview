
import styles from '../styles/Nav.module.css'
import Sign_Out from './signOut';


const Nav = ({ s_out }) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}></div>
            <nav className={styles.nav}>
                <div>
                    <button></button>
                    <button></button>
                    <button></button>
                <Sign_Out s_out={s_out} />
                </div>

            </nav>
            <div></div>
        </div>
    );
}

export default Nav;