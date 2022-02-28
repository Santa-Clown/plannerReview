
import styles from '../styles/sideNote.module.css'


const SideNav = ({toggler , s_out}) => {
    return ( 
        <div className={styles.sideNav} >
            <FaBeer />
            <button onClick={ ()=>toggler('add')} >προσθήκη</button>
            <button onClick={ ()=>toggler('show')}>προβολή</button>
        </div>
     );
}
 
export default SideNav;