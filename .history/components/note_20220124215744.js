const Note = ( {id, name , message} ) => {
    return (

        <div key={id} >
            <table>
                <td></td>
                <td> {name} - {message}</td>
                <td><button>X</button></td>

            </table>

        </div>

    );
}

export default Note;