
import styles from '../styles/Nav.module.css'
import { useState } from 'react';

const NavShow = () => {

    const [searchWord,setSearchWord]= useState('')


    return (<>

        <div className={styles.navChOne}>
            <p>Show Only:</p>
            <button>Ola</button>
            <input className='search' onChange={ (e)=> } type="text" />
            {/* <button onClick={() => { dateTypeF('Day') }} >Κοθμπι </button>
            <button onClick={() => { dateTypeF('Week') }}>button2</button>
            <button onClick={() => { dateTypeF('Month') }}>button3</button> */}

        </div>


    </>);
}

export default NavShow;