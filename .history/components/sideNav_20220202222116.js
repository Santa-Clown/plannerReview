
import styles from '../styles/sideNote.module.css'
import { FaAngellist ,FaPlus } from "react-icons/fa";
import { BsReverseLayoutTextSidebarReverse ,BsPlusSquare ,BsCalendar2Week } from "react-icons/bs";


const SideNav = ({toggler , s_out}) => {
    return ( 
        <div className={styles.sideNav} >
          
            <button onClick={ ()=>toggler('add')} ><BsPlusSquare /></button>
            <button onClick={ ()=>toggler('show')}><BsReverseLayoutTextSidebarReverse /></button>
            <button onClick={ ()=>toggler('show')}><BsCalendar2Week /></button>
        </div>
     );
}
 
export default SideNav;