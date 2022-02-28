const Note = ( {id, name , message} ) => {
    return (

        <div key={id} >
            <table>
                <tr></td>
                <td> {name} - {message}</td>
                <td><button>X</button></td>

            </table>

        </div>

    );
}

export default Note;