
import styles from '../styles/Nav.module.css'
import { useState , useRef ,useEffect } from 'react';

const NavShow = ({SearchW , searchword}) => {

    const [searchWord,setSearchWord]= useState('')
    const cleartext = useRef()
     

    return (<>

        <div className={styles.navChOne}>
            <p>Αναζήτηση:</p>
            
            <input className='search' value={searchword} ref={cleartext} onChange={ (e)=>{ 
                
                SearchW(e.target.value)
                 } } type="text" />
                 <button >Ola</button>
            {/* <button onClick={() => { dateTypeF('Day') }} >Κοθμπι </button>
            <button onClick={() => { dateTypeF('Week') }}>button2</button>
            <button onClick={() => { dateTypeF('Month') }}>button3</button> */}

        </div>


    </>);
}

export default NavShow;