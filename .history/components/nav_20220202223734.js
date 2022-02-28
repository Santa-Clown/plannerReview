
import styles from '../styles/Nav.module.css'
import Sign_Out from './signOut';


const Nav = ({ s_out }) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Notter</h1>
            </div>
            <nav className={styles.nav}>
                <div className={styles.navChOne}>
                    <p></p>
                    <button>Ola</button>
                    <button>button1</button>
                    <button>button2</button>
                <Sign_Out s_out={s_out} />
                </div>
                <div className={styles.navChTwo}>
                 <button>button1</button> 
                </div>

            </nav>
            <div></div>
        </div>
    );
}

export default Nav;