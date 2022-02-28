const Note = ({ id, name, message }) => {
    return (

        <div key={id} >
            <table>
                <tbody key={id}>
                    <td> {name} - {message}</td>
                    <td><button>X</button></td>
                </tbody>

            </table>

        </div>

    );
}

export default Note;