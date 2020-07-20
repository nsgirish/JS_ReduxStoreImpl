
const {createStore} = require('./components/SimpleRedux')
const {counter} = require('./reducers/counter')
const {todos} = require('./reducers/todos')

const main = async() => {

    const reducers = {
        counter,
        todos,
    }

    const store = createStore(reducers)

    store.subscribe(() => console.log('current store state is ',JSON.stringify(store.getState(),null,3)))

    store.dispatch({
        type:'INCREMENT'
    })

    store.dispatch({
        type:'INCREMENT',
    })

    store.dispatch({
        type:'INCREMENT',
    })

    store.dispatch({
        type:'INCREMENT',
    })

    store.dispatch({
        type:'DECREMENT',
    })

    store.dispatch({
        type:'ADD_TODO',
        payload:'finish coding',
    })

    store.dispatch({
        type:'TOGGLE_TODO',
        payload:'finish coding'
    })

}

main()
