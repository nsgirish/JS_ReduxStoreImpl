const initialState = {
    tasks: [],
}

const lib = {}

lib.todos = (state=initialState,action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                tasks: [...state.tasks,{
                    title: action.payload,
                    completed: false,
                }]
            }

        case 'TOGGLE_TODO':
            return {
                ...state,
                tasks: state.tasks.map(item => {
                    if(item.title === action.payload) {
                        item.completed = !item.completed
                    }
                    return item
                })
            }

        default:
            return state
    }
}

module.exports = lib