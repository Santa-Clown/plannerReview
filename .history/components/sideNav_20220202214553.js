
import styles from '../styles/sideNote.module.css'
import { FaAngellist ,FaPlus } from "react-icons/fa";
import { BsReverseLayoutTextSidebarReverse ,BsPlusSquare } from "react-icons/bs";


const SideNav = ({toggler , s_out}) => {
    return ( 
        <div className={styles.sideNav} >
          
            <button onClick={ ()=>toggler('add')} ><BsPlusSquare /></button>
            <button onClick={ ()=>toggler('show')}><BsReverseLayoutTextSidebarReverse /></button>
        </div>
     );
}
 
export default SideNav;