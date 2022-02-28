const Note = ( {id, name , message} ) => {
    return (

        <div key={id} >
            <div>
                <div></div>
                <div> {name} - {message}</div>
                <div><button>X</button></div>

            </div>

        </div>

    );
}

export default Note;