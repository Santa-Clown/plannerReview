
import styles from '../styles/sideNote.module.css'
import { FaAngellist ,FaPlus } from "react-icons/fa";


const SideNav = ({toggler , s_out}) => {
    return ( 
        <div className={styles.sideNav} >
          <FaAngellist />
            <button onClick={ ()=>toggler('add')} ><</button>
            <button onClick={ ()=>toggler('show')}>προβολή</button>
        </div>
     );
}
 
export default SideNav;