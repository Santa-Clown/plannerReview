
import styles from '../styles/Nav.module.css'
import { useState , useRef } from 'react';

const NavShow = ({SearchWord}) => {

    const [searchWord,setSearchWord]= useState('')
    const cleartext = useRef()

    return (<>

        <div className={styles.navChOne}>
            <p>Αναζήτηση:</p>
            
            <input className='search' ref={cleartext} onChange={ (e)=>{ 
                
                SearchWord(e.target.value)
                 } } type="text" />
                 <button onClick={cleartext.current =''}>Ola</button>
            {/* <button onClick={() => { dateTypeF('Day') }} >Κοθμπι </button>
            <button onClick={() => { dateTypeF('Week') }}>button2</button>
            <button onClick={() => { dateTypeF('Month') }}>button3</button> */}

        </div>


    </>);
}

export default NavShow;