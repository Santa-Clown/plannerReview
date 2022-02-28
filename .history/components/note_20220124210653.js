const Note = ( {name , message} ) => {
    return (

        <p key={note.id} >
            <table>
                <td></td>
                <td> {note.name} - {note.message}</td>
                <td><button>X</button></td>

            </table>

        </p>

    );
}

export default Note;