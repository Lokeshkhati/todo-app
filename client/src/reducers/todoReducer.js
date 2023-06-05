const initialState = {
    todos: [],
    isLoading: false,
    user: "",
    userLoading: false,
    token: '',
    isEditing: false,
    showModal: false,
    title: "",
    description: '',
    time: '',
    completed: false,
    tags: [],
    bgColor: 'red'
};

const todoReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_TODOS": {
            return {
                ...state,
                isLoading: false,
                todos: action.payload
            };
        }
        case "CREATE_TODO": {
            return {
                ...state,
                todos: [action.payload, ...state.todos],
                // isEditing: false
            };
        }
        case "DELETE_TODO": {
            return {
                ...state,
                todos: state.todos.filter((todo) => todo._id !== action.payload)
            };
        }
        case "TOGGLE_COMPLETE": {
            return {
                ...state,
                todos: state.todos?.map((todo) =>
                    todo?._id === action.payload ? { ...todo, completed: !todo.completed } : todo
                ),
            };
        }
        case "HANDLE_CHANGE":
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case "OPEN_MODAL":
            return {
                ...state,
                showModal: true
            }
        case "CLOSE_MODAL":
            return {
                ...state,
                showModal: false,
                isEditing: false
            }
        case "SET_EDIT": {
            return {
                ...state,
                isEditing: true
            };
        }
        case "EDIT_TODO": {
            return {
                ...state,
                todos: state.todos.map((todo) => todo._id === action.payload ? { ...todo, title: state.title, description: state.description, time: state.time } : todo),
                isEditing: false
            };
        }
        case "CHANGE_BG_COLOR": {
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo._id === action.payload.id ? { ...todo, bgColor: action.payload.color } : todo
                )
            }
        }
        case "GET_CURRENT_USER":
            return {
                ...state,
                user: action.payload.user,

            };
        default: {
            return state;
        }
    }
};
export { initialState, todoReducer }