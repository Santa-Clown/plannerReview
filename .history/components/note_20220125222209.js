const Note = ( {id, name , message} ) => {
    return (

        <div key={id} >
            <div>
                <tr></tr>
                <tr> {name} - {message}</tr>
                <tr><button>X</button></tr>

            </table>

        </div>

    );
}

export default Note;