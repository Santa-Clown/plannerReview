const Note = ( {id, name , message} ) => {
    return (

        <div key={id} >
            <div>
                <div></tr>
                <tr> {name} - {message}</tr>
                <tr><button>X</button></tr>

            </div>

        </div>

    );
}

export default Note;