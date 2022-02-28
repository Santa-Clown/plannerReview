
import styles from '../styles/Nav.module.css'
import Sign_Out from './signOut';
import NavDate from './NavForDate';
import NavShow from './NavForShow';
import NavAdd from './NavForAdd';
import { useEffect , useState } from 'react';


const Nav = ({ s_out, dateTypeF ,navField }) => {

const [navfield, setNavfield] =  useState(<NavShow />)
useEffect(()=>{
if(navField == 'add'){
    setNavfield( <NavAdd />)
}else if(navField == 'show' )
setNavfield( <NavShow />)
},[navField])


    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Notter</h1>
                <Sign_Out s_out={s_out} />
            </div>
            <nav className={styles.nav}>
                
                {navfield}

                {/* <NavDate /> */}
                {/* <div className={styles.navChOne}>
                    <p>Show Only:</p>
                    <button>Ola</button>
                    <button onClick={ ()=>{  dateTypeF('Day')  }  } >button1</button>
                    <button onClick={ ()=>{  dateTypeF('Week')  }  }>button2</button>
                    <button onClick={ ()=>{  dateTypeF('Month')  }  }>button3</button>
                
                </div> */}
                <div className={styles.navChTwo}>
                    <button>button1</button>
                </div>

            </nav>
            <div></div>
        </div>
    );
}

export default Nav;