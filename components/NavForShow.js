
import styles from '../styles/Nav.module.css'
import { useState, useRef, useEffect } from 'react';

const NavShow = ({ SearchW, searchword, showAll , togglePin }) => {

    const [searchWord, setSearchWord] = useState('')
    const cleartext = useRef()
    const [flag,setFlag] = useState(true)

    return (<>

        <div className={styles.navChOne}>
            

            <input className='search' placeholder='Αναζήτηση' ref={cleartext} onChange={(e) => {

                SearchW(e.target.value)
            }} type="text" />
            <button onClick={() => { showAll() }} >Όλα</button>
            <button style={!flag ? {boxShadow:'0 0 20px white'}: null}  onClick={ ()=>{ 

                        togglePin(flag)
                        setFlag(!flag)
                    } } >Saved</button>
            {/* <button onClick={() => { dateTypeF('Day') }} >Κοθμπι </button>
            <button onClick={() => { dateTypeF('Week') }}>button2</button>
            <button onClick={() => { dateTypeF('Month') }}>button3</button> */}

        </div>


    </>);
}

export default NavShow;