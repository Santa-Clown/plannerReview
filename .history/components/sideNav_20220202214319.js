
import styles from '../styles/sideNote.module.css'
import { FaAngellist ,FaPlus } from "react-icons/fa";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";


const SideNav = ({toggler , s_out}) => {
    return ( 
        <div className={styles.sideNav} >
          <FaAngellist />
            <button onClick={ ()=>toggler('add')} ><FaPlus /></button>
            <button onClick={ ()=>toggler('show')}><Bs</button>
        </div>
     );
}
 
export default SideNav;