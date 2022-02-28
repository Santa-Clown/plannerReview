const Note = ( {id, name , message} ) => {
    return (

        <div key={id} >
            <div>
                <div>{id}</div>
                <div> {name} - {message}</div>
                <div><button>X</button></div>

            </div>

        </div>

    );
}

export default Note;