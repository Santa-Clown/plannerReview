
import styles from '../styles/sideNote.module.css'
import { FaAngellist, FaPlus } from "react-icons/fa";
import { BsReverseLayoutTextSidebarReverse, BsPlusSquare, BsCalendar2Week, BsPersonCircle } from "react-icons/bs";


const SideNav = ({ toggler, s_out }) => {
    return (
        <div className={styles.sideNav} >

            <div>
                {/* <button  onClick={() => toggler('add')} ><BsPlusSquare /></button> */}
                <button onClick={() => toggler('show')}><BsReverseLayoutTextSidebarReverse /></button>
                <button onClick={() => toggler('calendar')}><BsCalendar2Week /></button>
            </div>
            <button className={styles.signupButt} onClick={() => toggler('signUp')}> <BsPersonCircle /> </button>
        </div>
    );
}

export default SideNav;