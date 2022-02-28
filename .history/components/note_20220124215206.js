const Note = ({ id, name, message }) => {
    return (

        <div key={id} >
            <table>
                <tr key={id}>   
                    <td> {name} - {message}</td>
                    <td><button>X</button></td>
                </tr>

            </table>

        </div>

    );
}

export default Note;