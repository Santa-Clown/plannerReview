const Note = ( {id, name , message} ) => {
    return (

        <div key={id} >
            <table>
                <tr></tr>
                <tr> {name} - {message}</tr>
                <tr><button>X</button></td>

            </table>

        </div>

    );
}

export default Note;