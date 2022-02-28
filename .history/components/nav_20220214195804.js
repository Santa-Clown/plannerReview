
import styles from '../styles/Nav.module.css'
import Sign_Out from './signOut';
import NavDate from './NavForDate';
import NavShow from './NavForShow';
import NavAdd from './NavForAdd';
import { useEffect, useState } from 'react';
import SignUp from './signup';


const Nav = ({ s_out, dateTypeF, navField , searchWord, search , showAll ,togglePin }) => {

    const [navfield, setNavfield] = useState(<NavShow />)
    useEffect(() => {
        if (navField == 'add') {
            setNavfield(<NavAdd />)
        } else if (navField == 'show')
           { setNavfield(<NavShow showAll={showAll} SearchW={search} searchword={searchWord}  />
            
            
            
            )
        
        
        }


        
    }, [navField])
    const [flag,setFlag] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Notter</h1>
                
                {/* <Sign_Out s_out={s_out} /> */}
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
                {navField=='show'? <div className={styles.navChTwo}>
                    <button style={{color:'black',fontWeight:"bold"}} onClick={ ()=>{ 
                        togglePin(flag)
                        setFlag(!flag)
                    } } >Pinned</button>
                </div> : null}
                

            </nav>
            <div></div>
        </div>
    );
}

export default Nav;