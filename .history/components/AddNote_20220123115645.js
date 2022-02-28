import 
const Note = () => {




    const nameRef = useRef();
  const messageRef = useRef();




  function add(e) {
    e.preventDefault();

    addDoc(colRef, {
      name: nameRef.current.value,
      message: messageRef.current.value,

    }).then(() => {

      alert('done')
    })
  }
    return ( 
        <>

            <p>noter</p>

            <form className='add'>
        <input ref={nameRef} type="text" name='name' placeholder="name" />
        <input ref={messageRef} type="text" name='message' placeholder="message" />
        <button type='submit' onClick={e => add(e)} >submit</button>
        



      </form>
        
        
        
        
        </>
     );
}
 
export default Note;