const Note = () => {
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