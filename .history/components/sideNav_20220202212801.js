import { icons } from 'react-icons'
import styles from '../styles/sideNote.module.css'
import FaB

const SideNav = ({toggler , s_out}) => {
    return ( 
        <div className={styles.sideNav} >
            <button onClick={ ()=>toggler('add')} >προσθήκη</button>
            <button onClick={ ()=>toggler('show')}>προβολή</button>
        </div>
     );
}
 
export default SideNav;