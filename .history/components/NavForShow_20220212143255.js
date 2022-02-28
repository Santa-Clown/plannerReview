
import styles from '../styles/Nav.module.css'

const NavShow = () => {



    
    return (<>

        <div className={styles.navChOne}>
            <p>Show Only:</p>
            <button>Ola</button>
            <input className='search' type="text" />
            {/* <button onClick={() => { dateTypeF('Day') }} >Κοθμπι </button>
            <button onClick={() => { dateTypeF('Week') }}>button2</button>
            <button onClick={() => { dateTypeF('Month') }}>button3</button> */}

        </div>


    </>);
}

export default NavShow;