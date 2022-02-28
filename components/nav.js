
import styles from '../styles/Nav.module.css'
import Sign_Out from './signOut';
import NavDate from './NavForDate';
import NavShow from './NavForShow';
import NavAdd from './NavForAdd';
import { useEffect, useState } from 'react';
import SignUp from './signup';


const Nav = ({ s_out, dateTypeF, navField, searchWord, search, showAll, togglePin, toggler }) => {

    const [navfield, setNavfield] = useState(<NavShow />)
    useEffect(() => {
        if (navField == 'add') {
            setNavfield( 'add'//<NavAdd />
            )
        } else if (navField == 'show') {
            setNavfield('show' )


        } else if (navField == 'signUp') {
            setNavfield('')
        }

        else if (navField == 'calendar') {
            setNavfield( 'calendar')
        }



    }, [navField])
    const [flag, setFlag] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Notter</h1>

                {/* <Sign_Out s_out={s_out} /> */}
            </div>
            <nav className={styles.nav}>

                {navfield == 'add' ? <NavShow toggler={toggler} showAll={showAll} SearchW={search} searchword={searchWord} />: null }
                {navfield == 'show' ? <NavShow togglePin={togglePin} showAll={showAll} SearchW={search} searchword={searchWord} />: null }
                {navfield == 'signUp' ? null: null }
                {navfield == 'calendar' ? <NavDate DateTypeF={dateTypeF} />: null }

                {/* <NavDate /> */}

                {navfield == 'calendar' ?  <div className={styles.navChOne}>
                    <p>Προβολή ανά:</p>
                    
                    <button onClick={ ()=>{  dateTypeF('Day')  }  } >Μέρα</button>
                    <button onClick={ ()=>{  dateTypeF('Week')  }  }>Εβδομάδα</button>
                    <button onClick={ ()=>{  dateTypeF('Month')  }  }>Μήνας</button>
                
                </div>: null }
               
                {navField == 'show' ? <div className={styles.navChTwo}>




                    <button className={styles.addbut} style={{ color: 'black', fontWeight: "bold" }} onClick={() => {
                        toggler('add')
                    }} >Δημιουργία</button>
                </div> : null}


            </nav>
            <div></div>
        </div>
    );
}

export default Nav;