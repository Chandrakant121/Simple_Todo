export const TodoItem = ({ todo }) => {
    return (
        <div>
            {/* <div className="Todoid">id:{todo.id}</div> */}
            {/* {todo.title} - {todo.status ? "Done" : "Not Done"} */}
            <div id="Todotitle">
                {todo.title}
            </div>

            <button id="togglebtn">Toggle</button>
        </div>
    )
}