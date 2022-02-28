
import styles from '../styles/Nav.module.css'
import { useState } from 'react';

const NavShow = ({SearchWord}) => {

    const [searchWord,setSearchWord]= useState('')
    

    return (<>

        <div className={styles.navChOne}>
            <p>Αναζήτηση:</p>
            
            <input className='search' onChange={ (e)=>{ 
                
                SearchWord(e.target.value)
                 } } type="text" />
                 <button>Ola</button>
            {/* <button onClick={() => { dateTypeF('Day') }} >Κοθμπι </button>
            <button onClick={() => { dateTypeF('Week') }}>button2</button>
            <button onClick={() => { dateTypeF('Month') }}>button3</button> */}

        </div>


    </>);
}

export default NavShow;