
import styles from '../styles/Nav.module.css'
import Sign_Out from './signOut';


const Nav = ({ s_out ,dateTypeF }) => {

    const dateType =(dType)=>{
        dateTypeF(dType)
    }


    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Notter</h1>
            </div>
            <nav className={styles.nav}>
                <div className={styles.navChOne}>
                    <p>Show Only:</p>
                    <button>Ola</button>
                    <button onClick={ ()=>{  dateTypeF('Day')  }  } >button1</button>
                    <button onClick={ ()=>{  dateTypeF('Week')  }  }>button2</button>
                    <button onClick={ ()=>{  dateType('Month')  }  }>button3</button>
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